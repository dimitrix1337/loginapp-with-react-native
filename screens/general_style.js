import { Dimensions } from 'react-native';

export function wp(percentage) {

    var percentage = percentage / 100

    var screen_width = Dimensions.get('screen').width

    return (screen_width * percentage)

}

export function hp(percentage) {

    var percentage = percentage / 100

    var screen_height = Dimensions.get('screen').height

    return (screen_height * percentage)

}
