export default class ResponceHandler {


    static Sections(responce){
        let result = responce.map(section => {
            section['src'] = section['src'].replace("/40/", "/80/")
            return section
        })
        return result
    }

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
        const marker = responce[0]
        let firstBlock = []
        let secondBlock = []
        let thirdBlock = []
        let fourthBlock = []
        let photo = ''
        let dopBlock = {}
        let secondBlockItem = {
            'улица': 'https://sun9-23.userapi.com/impf/2ov7wYZ9wYFfx3Okg8IUHn9KXZsueRTJIomONA/-LFtkDR_CXE.jpg?size=40x40&quality=96&sign=6f03b47c994f2b694eb0dc6d64de2548&type=album',
            'номер телефона': 'https://sun9-37.userapi.com/impf/60htNCBlvsNK8QzIwCLBq3M1Rrm6lAGCaw1sNA/UFNzg7ruFig.jpg?size=40x40&quality=96&sign=d8cdf59319eeba35a21cb3ccac9de5f0&type=album',
            'под-раздел': 'https://sun9-77.userapi.com/impf/xbLdEUYfzoT1IpVg7lI4lzZGb-H2I84hQzpuDA/VZ5lL1btJiU.jpg?size=40x40&quality=96&sign=e4e93a956f4800520fbf5ed90e4439e9&type=album'
        }
        if (responce['номер телефона'] != null){
            dopBlock = {
                    title: marker['номер телефона'],
                    text: 'номер телефона',
                    img: 'https://psv4.userapi.com/c235131/u2000062290/docs/d48/151e9c99bb36/file.png?extra=BGU7HRhcgA5dvAn8Rvro4FDXCGi1sELPw-47Pa-BqAMNFW9zMyctVEy-myywweL2j9YQD-f-WffGvYhe-8nw_3x9PqaOitSO7ykC6LT8MZHHFY07jeX00Kx2T22uhk1zG5x8A-iZ-TlnsYbl8YcTkG66_Lc'
                }

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
        if(marker['фото'].split(',').length > 1){
            photo = marker['фото'].split(',')
        }else{
            photo = [marker['фото']]
        }
        firstBlock.push(marker['имя'],marker['под-раздел'])
        Object.keys(marker).map((item,index) => {
            if(secondBlockItem[item] != undefined && marker[item] != null){
                secondBlock.push([secondBlockItem[item],marker[item]])
            }
            if(thirdBlockItem[marker[item]] != undefined && marker[item] != null && item != 'Высота дверного порожка'){
                thirdBlock.push([thirdBlockItem[marker[item]],item])
            }
            if(fourthBlockItem[item] != undefined && marker[item] != null){
                fourthBlock.push([item,marker[item],fourthBlockItem[item]])
            }
        })
        let result = {
            id: marker['id'],
            coordinats: marker['координаты'],
            section: marker['раздел'],
            photo: photo,
            dopBlock: marker['номер телефона'],
            firstBlock: firstBlock,
            secondBlock: secondBlock,
            thirdBlock: thirdBlock,
            fourthBlock: fourthBlock
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