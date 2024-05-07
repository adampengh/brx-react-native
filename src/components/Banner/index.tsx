import { BrManageContentButton, BrProps } from '@bloomreach/react-sdk';
import { ImageSet } from '@bloomreach/spa-sdk';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import appStyles from '../../styles/appStyles';

const Banner = ({ component, page }: BrProps) => {
  if (!component || !page) return null;

  const { document: documentRef } = component?.getModels();
  const document = !!documentRef && page?.getContent(documentRef);

  if (!document) {
    return page.isPreview() ? <Text>Document not found</Text> : null;
  }

  const { title, image: imageRef } = document?.getData();
  const image = imageRef && page.getContent<ImageSet>(imageRef);
  const imageRatio = image.getOriginal().getWidth() / image.getOriginal().getHeight();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    image: {
      width: appStyles.screen.width,
      height: appStyles.screen.width / imageRatio,
    },
    gradient: {
      position: 'absolute',
      top: appStyles.screen.width / imageRatio / 2,
      bottom: 0,
      width: appStyles.screen.width,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <BrManageContentButton content={document} />
      <Image
        style={styles.image}
        source={{
          uri: image.getOriginal().getUrl(),
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

export default Banner;
