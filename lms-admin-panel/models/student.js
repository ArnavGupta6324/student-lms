import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  enrolledCourses: [String],
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
