export const userSchema = {
    name: 'user',
    type: 'document',
    title: 'Users',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name:'wallet',
            type:'string',
            name:'Wallet',
        },
        {
            name: 'profile_image',
            type: 'image',
            title: 'Profile Image',
        },
    ],
}