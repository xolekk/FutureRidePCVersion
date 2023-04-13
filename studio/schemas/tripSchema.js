export const tripSchema={
    name:'trip',
    type:'document',
    title:'Trips',
    fields:[
        {
            name:'pickup',
            type:'string',
            title:'Pick up',
        },
        {
            name:'dropoff',
            type:'string',
            title:'Drop off',
        },
        {
            name:'rideType',
            type:'string',
            title:'Ride type',
        },
        {
            name:'price',
            type:'number',
            title:'Journey Price',
        },
        {
            name:'rideTime',
            type:'datetime',
            title:'Ride time',
        },
        {
            name:'passenger',
            type:'reference',
            title:'Passenger',
            to:[{type:'user'}],
        },
    ]
}