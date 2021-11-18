export default class ActivityFactory {
    static getActivities(){
        return [
            {
                id:"sexting",
                title:'Los riesgos en las redes sociales',
                subtitle:"Los riesgos en las redes sociales",
                sharetitle:"Los riesgos en las redes sociales",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/video-1-sexting.jpg",
                url:"https://meconectosinclavos.net.gt/wp-content/uploads/2020/11/video-1-sexting.mp4"
            },
            {
                id:"juegos",
                title:'Los peligros en los juegos en línea',
                subtitle:"¿Peligro en los juegos en línea?",
                sharetitle:"Los peligros en los juegos en línea",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-3-los-juegos-en-linea-son-peligrosos.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/11/Video-3-los-juegos-en-linea-son-peligrosos.mp4"
        
            },
            {
                id:"publicidad",
                title:'Conocimiento de control parental',
                subtitle:"Conocimiento de control parental",
                sharetitle:"Conocimiento de control parental",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-4-privacidad-y-control-parental.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/11/Video-4-privacidad-y-control-parental.mp4"
            },
            {
                id:"temolesta",
                title:'Cómo protegerme de desconocidos',
                subtitle:"Cómo protegerme de desconocidos",
                sharetitle:"Cómo protegerme de desconocidos",
                img:"https://meconectosinclavos.net.gt/wp-content/uploads/2020/12/Video-2-alguien-te-molesta-en-la-red-768x434.jpg",
                url:"https://meconectosinclavos.net.gt/wp-content/uploads/2021/05/17.-Alguien-Te-Molesta-En-La-Red-1.m4v"
            },
            {
                id:"sexual",
                title:'Seguridad al navegar',
                subtitle:"Seguridad al navegar",
                sharetitle:"Seguridad al navegar",
                img:"https://meconectosinclavos.net.gt/wp-content/uploads/2020/12/Video-5-alguien-me-presiona-para-enviar-más-fotos-sin-ropa-768x434.jpg",
                url:"https://meconectosinclavos.net.gt/wp-content/uploads/2021/05/18.-Fotos-Sin-Ropa-1.m4v"
            },
            {
                id:"top5apps",
                title:'Conocimiento top 5 apps',
                subtitle:"Conocimiento top 5 apps",
                sharetitle:"Conocimiento top 5 apps",
                img:"https://meconectosinclavos.net.gt/wp-content/uploads/2020/12/Video-6-Top-5-apps-768x434.jpg",
                url:"https://meconectosinclavos.net.gt/wp-content/uploads/2021/05/Top-55-Apps-1.mp4"
            }
        ];
    }

    static getVideo(idvideo){
        const activs = ActivityFactory.getActivities();
        let arrResult = activs.filter(a=>a.id==idvideo)
        let objVideo = arrResult[0];
        if(arrResult.length>0){
            let objVideo = arrResult[0];
            sub = objVideo.url;
        }else{
            sub="";
        }
        return sub;
    }

    static getPoster(idvideo){
        const activs = ActivityFactory.getActivities();
        let arrResult = activs.filter(a=>a.id==idvideo)
        let objVideo = arrResult[0];
        if(arrResult.length>0){
            let objVideo = arrResult[0];
            sub = objVideo.img;
        }else{
            sub="";
        }        
        return sub;
    }

    static getSubtitle(idvideo){
        const activs = ActivityFactory.getActivities();
        let arrResult = activs.filter(a=>a.id==idvideo)
        let sub="";
        if(arrResult.length>0){
            let objVideo = arrResult[0];
            sub = objVideo.subtitle;
        }else{
            sub="";
        }
        return sub;
    }

    static getSharetitle(idvideo){
        const activs = ActivityFactory.getActivities();
        let arrResult = activs.filter(a=>a.id==idvideo)
        let objVideo = arrResult[0];
        if(arrResult.length>0){
            let objVideo = arrResult[0];
            sub = objVideo.sharetitle;
        }else{
            sub="";
        }
        return sub;
    }
}