export const activeTripSchema={
    name:'activeTrip',
    type:'document',
    title:'Active Trips',
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
            name:'passengerWallet',
            type:'string',
            title:'Passenger Wallet',
        },
        {
            name: 'driverWallet',
            type: 'string',
            title: 'Driver Wallet',
        },
        {
            name: 'isFinished',
            type: 'boolean',
            title: 'Is trip finished'
        }
    ]
}