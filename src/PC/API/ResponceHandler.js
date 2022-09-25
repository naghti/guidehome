export default class ResponceHandler {


    static SectionMarkers(responce){
        console.log(responce)
        let result = responce.map(marker => {
            if (marker['номер телефона'] == null){
                delete marker['номер телефона']
            }
            let photos = marker['фото'].split(',')
            if(photos.length > 1){
                marker['фото'] = photos[0]
            }else{
                marker['фото'] = marker['фото']
            }
            return marker
        })
        return result
    }


    static Marker(responce) {
        console.log(responce)
        const marker = responce[0]
        let firstBlock = []
        let secondBlock = []
        let thirdBlock = []
        let fourthBlock = []
        let photo = ''
        let secondBlockItem = {
            'улица': 'https://sun9-23.userapi.com/impf/2ov7wYZ9wYFfx3Okg8IUHn9KXZsueRTJIomONA/-LFtkDR_CXE.jpg?size=40x40&quality=96&sign=6f03b47c994f2b694eb0dc6d64de2548&type=album',
            'номер телефона': 'https://sun9-37.userapi.com/impf/60htNCBlvsNK8QzIwCLBq3M1Rrm6lAGCaw1sNA/UFNzg7ruFig.jpg?size=40x40&quality=96&sign=d8cdf59319eeba35a21cb3ccac9de5f0&type=album',
            'под-раздел': 'https://sun9-77.userapi.com/impf/xbLdEUYfzoT1IpVg7lI4lzZGb-H2I84hQzpuDA/VZ5lL1btJiU.jpg?size=40x40&quality=96&sign=e4e93a956f4800520fbf5ed90e4439e9&type=album'
        }
        let thirdBlockItem = {
            1:'https://sun9-11.userapi.com/impf/G1VabdwTl5oKTrO62NwKIJ28XPA0bUA9F9kDzg/BgoYImYzFZc.jpg?size=40x40&quality=96&sign=3ceef927089c5ec19ed30f3a0b77b00c&type=album',
            0:'https://sun9-47.userapi.com/impf/Fufpilo-Qh3lC6GK-92oI6R3GSMwR3-njh3jkw/7z_OyykNu5I.jpg?size=40x40&quality=96&sign=a85f45d67209f7c5b9b7899ce48e28f5&type=album'
        }
        let fourthBlockItem = {
            'Ширина пандуса' : 'см',
            'Высота пандуса' : 'см',
            'Длина пандуса' : 'см',
            'Угол наклона пандуса' : '°',
            'Ширина дверного проема' : 'см',
            'Высота дверного порожка' : 'мм',
        }
        console.log(marker)
        if(marker['фото'].split(',').length > 1){
            photo = marker['фото'].split(',')[0]
        }else{
            photo = marker['фото']
        }
        firstBlock.push(marker['имя'],marker['под-раздел'])
        Object.keys(marker).map((item,index) => {
            if(secondBlockItem[item] != undefined && marker[item] != null){
                secondBlock.push([secondBlockItem[item],marker[item]])
            }
        })
        let result = {
            id: marker['id'],
            city: marker['город'],
            coordinats: marker['координаты'],
            photo: photo,
            firstBlock: firstBlock,
            secondBlock: secondBlock,
            thirdBlock: thirdBlock,
            fourthBlock: fourthBlock,
            description: responce[0]['описание'],
            'путь': responce[0]['путь'],
        }
        return result
    }
    static MarkerPhoto(responce) {

        let result = responce[0]
        let photos = responce[0]['фото'].split(',')
        if(photos.length > 1){
            result['фото'] = photos
        }else{
            result['фото'] = [photos]
        }
        return result
    }
    static MarkerPrewiev(responce){
        let result = responce
        let photos = responce[0]['фото'].split(',')
        if(photos.length > 1){
            result['фото'] = photos
        }
        return result
    }

}