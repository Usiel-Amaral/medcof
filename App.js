import React, { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [showWebView, setShowWebView] = useState(false);

  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://icevidanova.com.br/' }} 
        style={showWebView ? styles.webview : styles.hidden} 
      />
      {!showWebView && (
        <View style={styles.overlay}>
          <Image 
            source={require('./assets/logo.png')} 
            style={styles.image} 
            resizeMode="contain" 
          />
          <Button title="Seja bem-vindo(a), entre!" onPress={() => setShowWebView(true)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    marginTop: 40,
  },
  hidden: {
    display: 'none',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '50%',
    marginBottom: 20,
  },
});
