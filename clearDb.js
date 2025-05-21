const mongoose = require('mongoose');
const User = require('./models/User');

// MongoDB Connection
mongoose.connect('mongodb+srv://skill-4:Rahul6364@cluster0.d0pok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('Connected to MongoDB Atlas');
    try {
        // Clear the users collection
        await User.deleteMany({});
        console.log('All users have been deleted');
        process.exit(0);
    } catch (error) {
        console.error('Error clearing database:', error);
        process.exit(1);
    }
})
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
}); 