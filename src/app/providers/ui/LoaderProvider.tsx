import React, {ReactNode, useContext} from 'react';
import {LoaderContext} from 'shared/lib/loaderContext';
import {Text, View} from 'react-native';
import {useAuth} from 'shared/lib/useAuth';

const LoaderProvider = (props: {children: ReactNode}) => {
  const {children} = props;

  const {isLoading, setIsLoading} = useContext(LoaderContext);

  const {isAuthLoading, isAuth} = useAuth();

  console.log('BIS isAuthLoading', isAuthLoading);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}>
      {isAuthLoading && !isAuth ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text> Loading .....</Text>
        </View>
      ) : (
        children
      )}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
