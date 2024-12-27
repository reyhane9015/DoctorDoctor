import { Spaciality} from '../../models/spacialities';
import mongoose from 'mongoose';



// type ResponseType = {
//     json: (body: any) => Response;
// };


export async function GET() : Promise<Response> {

    await mongoose.connect(process.env.MONGO_URL as string);

    const categories = await Spaciality.find();

    return new Response(JSON.stringify(categories), {
        headers: { 'Content-Type': 'application/json' }
    });
}