import { model, models , Schema } from 'mongoose';

const spacialitySchema = new Schema({
   name: {type: String , required: true}
},{timestamps: true});


export const Spaciality = models?.spaciality || model('spaciality' , spacialitySchema);