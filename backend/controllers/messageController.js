import Conversation from "../models/conversationModel";
import Message from "../models/messageModel";

export const sendMessage = async (req, res)=>{
    try{
        const senderId= req.id;
        const receiverId = req.params.id;
        const message =req.body;

        let gotConversation = await Conversation.findOne({
            participants: {$all: [senderId , receiverId]},
        });

        if (!gotConversation){
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId]});
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            gotConversation.message.push(newMessage._id);
        }

        await gotConversation.save();
        // socket.io implementation

    }catch(error){
        console.log(error);

    }
}

export const getMessage = async (req, res)=>{

    try{
        const senderId = req.id;
        const receiverId = req.params.id;

        const conversation = await Conversation.findOne({
            $all:[senderId,receiverId]
        }).populate("message");

        return res.status(200).json(conversation?.message);
        
    }catch(error){
        console.log(error);
    }
}