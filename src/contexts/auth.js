import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';
import api from '@/configs/api';
import { showMessage } from 'react-native-flash-message';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedUser = await AsyncStorage.getItem('user');
      const storagedToken = await AsyncStorage.getItem('token');

      console.log(storagedToken);

      if (storagedToken && storagedUser) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        const userData = JSON.parse(storagedUser);
        setUser(userData);
        setType(userData.type);
      }
      setLoading(false);
    };
    loadStorageData();
  }, []);

  const signIn = async ({ email, password }) => {
    console.log(email, password);

    const response = await api.post('/login', { email, password });

    if (response.data.user) {
      setUser(response.data.user);
      setType(response.data.user.type);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      const items = [
        ['user', JSON.stringify(response.data.user)],
        ['token', response.data.token],
      ];
      await AsyncStorage.multiSet(items);
    } else {
      showMessage({
        message: 'Error',
        description: 'user not found',
        duration: 2500,
      });
    }
  };

  const refresh = async () => {
    const response = await api.get('/getUser');
    if (response.data) {
      await AsyncStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, loading, refresh, type, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
