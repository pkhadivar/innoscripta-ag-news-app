interface Tdata{
    title: string;
    description?: string;
    webUrl: string;
    createAt: string;
    Category: string;
    imageUrl:string;
    author?: string;
}

type SourcesType = 'newsApi' | "guardian" ;

export enum Sources {
    NEWS_API = 'newsApi',
    GUARDIAN = 'guardian'
}

export function dataMapping(originalData: any,sourcesType: SourcesType):Tdata{
    const newData:any =[]    
    switch (sourcesType) {
        case Sources.NEWS_API:
             originalData.forEach((data:any)=>newData.push({
                title: data.title,
                description: data.description,
                webUrl: data.url,
                createAt: data.publishedAt,
                category: data.category,
                author:data.author,
                imageUrl: data?.urlToImage
            }))
            return newData

        case Sources.GUARDIAN:
             originalData.forEach((data:any)=>newData.push({
                title: data.webTitle,
                author: data.type,
                description: data.description,
                webUrl: data.webUrl,
                createAt: data.webPublicationDate,
                category: data.sectionId,
                imageUrl: "https://i.guim.co.uk/img/media/eaa58861734c90c9c97d158f27027811f9b741dc/0_26_1400_840/master/1400.jpg?width=620&dpr=2&s=none"
            }))
             return newData
        default:
            return newData;
    }
}