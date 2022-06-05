import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Linking} from 'react-native';
import { SafeAreaView, YellowBox } from 'react-native-web';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F535E';

const urlToMyGitHub = 'https://github.com/bezerra91';

export default function App() {
const handlePressGoToGitHub = async () => {
  console.log('Verificando link');
  const res = await Linking.canOpenURL(urlToMyGitHub);
    if (res) {
    console.log('Link aprovado');
    console.log('Abrindo link...');
    await Linking.openURL(urlToMyGitHub);
  }
};

  return (
    <View style={styles.container}>
    <View style={styles.content}>
    <StatusBar backgroundColor={colorGithub} style="light" />
      <Image 
      accessibilityLabel='Avatar em desenho do Rosto com fundo branco e laranja'
      style={styles.avatar} 
      source={require('./assets/avatar.png')} 
      />
      <Text accessibilityLabel= 'Nome: Rebeca'
      style={[styles.defaultText, styles.name]}>Rebeca Valenzuela
      </Text>
      <Text accessibilityLabel='Nickname: bezerra91'
      style={[styles.defaultText, styles.nickname]}>bezerra91
      </Text>
      <Text accessibilityLabel='Descrição: Estudante de Análise e Desenvolvimento de Sistemas'
      style={[styles.defaultText, styles.description]}>Estudante de Análise e Desenvolvimento de Sistemas
      </Text>
      <Pressable onPress={handlePressGoToGitHub}>
        <View style={styles.button}>
        <Text style={[styles.defaultText, styles.textButton]}>
          Open in GitHub
        </Text>
        </View>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    alignItems: 'center',
    justifyContent: 'center',
    },
    content: {
     alignItems: 'center',
     padding: 20,
   },
   avatar: {
     height:200,
     width: 200,
     borderRadius:100,
     borderColor: 'white',
     borderWidth: 2,
   },
   defaultText: {
     color: colorFontGithub,
   },
   name:{
     marginTop: 20,
     fontWeight: 'bold',
     fontSize: 24,
   },
   nickname: {
     color: colorDarkFontGithub,
     fontSize: 18,
   },
   description: {
     fontWeight: 'bold',
     fontSize: 14,
   },
   textButton: {
    fontWeight: 'bold',
    fontSize: 16,
   },
   button: {
     marginTop: 10,
     backgroundColor: colorDarkFontGithub,
     borderRadius: 10,
     padding: 20,
   }
  });

