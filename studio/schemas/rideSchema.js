export const rideSchema={
    name:'rides',
    title: 'Rides',
    type:'document',
    fields:[
        {
            name:'orderById',
            title:'Order by ID',
            type:'number',
        },
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'icon',
            title: 'Icon',
            type: 'image',
        }
    ],
}