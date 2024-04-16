import mongoose from 'mongoose';

const SalarySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    basic: {
        type: Number,
        enum: [35000, 40000, 75000, null],
    },
    attendanceAllowance: {
        type: Number,
        required: true,
        enum: [5000, 2000, null],
        default: 5000,
    },
    fuelAllowance: {
        type: Number,
        required: true,
        enum: [10000, 20000, null],
        default: 10000,
    },
    overtime: {
        type: Number,
        required: true,
    },
    totalSalary: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const SalaryModel = mongoose.model("salaries", SalarySchema);

export default SalaryModel;
