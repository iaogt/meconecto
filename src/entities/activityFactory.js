export default class ActivityFactory {
    static getActivities(){
        return [
            {
                id:"sexting",
                title:'Sexting',
                subtitle:"¿Por qué el sexting es un peligro?",
                sharetitle:"Evita el sexting",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/video-1-sexting.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/11/video-1-sexting.mp4"
            },
            {
                id:"juegos",
                title:'Juegos Peligrosos',
                subtitle:"¿Peligro en los juegos en línea?",
                sharetitle:"Cuidado con los juegos en línea",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-3-los-juegos-en-linea-son-peligrosos.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/11/Video-3-los-juegos-en-linea-son-peligrosos.mp4"
        
            },
            {
                id:"publicidad",
                title:'Publicidad',
                subtitle:"¿Publicidad y control parental",
                sharetitle:"Ten cuidado con la publicidad",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-4-privacidad-y-control-parental.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/11/Video-4-privacidad-y-control-parental.mp4"
            },
            {
                id:"desnudos",
                title:'Desnudos',
                subtitle:"¿Ten cuidado con los desnudos",
                sharetitle:"Ten cuidado con los desnudos",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-5-alguien-me-presiona-para-enviar-ma%CC%81s-fotos-sin-ropa.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/11/Video-5-alguien-me-presiona-para-enviar-más-fotos-sin-ropa.mp4"
            },
            {
                id:"sexual",
                title:'Agresión Sexual',
                subtitle:"¿Te han agredido sexualmente?",
                sharetitle:"Evita la agresión sexual",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/agresion-sexual-final.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/agresion-sexual-final.mp4"
            },
            {
                id:"exhibicionismo",
                title:'Exhibicionismo',
                subtitle:"Evita el exhibicionismo",
                sharetitle:"Evita el exhibicionismo",
                img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/exhibicion-sexual-final.jpg",
                url:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/exhibicion-sexual-final.mp4"
        
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