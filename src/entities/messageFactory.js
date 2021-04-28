import dynamicLinks from '@react-native-firebase/dynamic-links';

export default class MessageFactory {
    static createCompLink(competition){
        return new Promise((resolve,reject)=>{
            dynamicLinks().buildShortLink({
                link: 'https://meconectosinclavos.net.gt/competencia/'+competition.name,
                // domainUriPrefix is created in your Firebase console
                domainUriPrefix: 'https://meconecto.page.link',
                android:{
                    packageName:"com.meconecto"
                },
                social:{
                    title:competition.sharetitle,
                    descriptionText:"Ayuda a los niños y niñas a detener los delitos de violencia en su contra"
                }
            },dynamicLinks.ShortLinkType.SHORT)
            .then(p=>{
                resolve(p);
            })
            .catch(e=>{
                reject(e);
            })
        })
    }

    static createAppLink(){
        return new Promise((resolve,reject)=>{
            dynamicLinks().buildShortLink({
                link: 'https://meconectosinclavos.net.gt/app',
                // domainUriPrefix is created in your Firebase console
                domainUriPrefix: 'https://meconecto.page.link',
                android:{
                    packageName:"com.meconecto"
                },
                social:{
                    title: "Explora MeConectoSinClavos",
                    descriptionText:"Ayuda a los niños y niñas a detener los delitos de violencia en su contra"
                }
            },dynamicLinks.ShortLinkType.SHORT)
            .then(p=>{
                resolve(p);
            })
            .catch(e=>{
                reject(e);
            })
        })
    }
}