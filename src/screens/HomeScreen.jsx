import { Button, StyleSheet, Text, View } from 'react-native';
import { useBrxmPage } from 'hooks';
import { BrPage, BrComponent } from '@bloomreach/react-sdk';

import { Banner } from 'components';

const HomeScreen = ({ navigation }) => {
    const { brxmConfiguration, brxmPage } = useBrxmPage();
    const mapping = {
        Banner: Banner,
    }

    return !brxmPage || !brxmConfiguration ? (
        <Text style={styles.text}>Loading...</Text>
    ) : (
        <BrPage configuration={brxmConfiguration} mapping={mapping} page={brxmPage}>
            <View style={styles.container}>
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigation.navigate("Profile", { name: "Jane" })}
                />
                <BrComponent path="main" />
            </View>
        </BrPage>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;
