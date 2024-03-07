import { BrManageContentButton } from '@bloomreach/react-sdk';
import { Image, StyleSheet, Text, View } from 'react-native';

const Banner = ({ component, page }) => {
    if (!component || !page) return null;

    const { document: documentRef } = component?.getModels();
    const document = !!documentRef && page?.getContent(documentRef);

    if (!document) {
        return page.isPreview() ? <Text>Document not found</Text> : null;
    }

    const {
        contentType,
        displayName,
        title,
        image: imageRef,
    } = document?.getData();
    const image = imageRef && page.getContent(imageRef);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
        image: {
            width: 400,
            height: 200,
            resizeMode: 'stretch',
        },
    });

    return (
        <View style={styles.container}>
            <BrManageContentButton content={document} />
            <Text>Banner</Text>
            <Text>{title}</Text>
            <Text>{contentType}</Text>
            <Text>{displayName}</Text>
            <Image
                style={styles.image}
                src={image.getOriginal().getUrl()}
            />
        </View>
    );
}



export default Banner;
