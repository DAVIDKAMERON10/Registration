import mongoose from 'mongoose';

const ParticipantSchema = new mongoose.Schema({
  idNumber: String,
  firstName: String,
  middleInitial: String,
  lastName: String,
  program: String,
  yearLevel: String,
  strand: String,
  preferredCourse: String,
  department: String,
  type: String,
  qrCodeData: String,
});

const Participant = mongoose.model('Participant', ParticipantSchema);
export default Participant;