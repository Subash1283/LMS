"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentController = void 0;
const assignment_service_1 = require("../service/assignment.service");
class AssignmentController {
    assignmentService;
    constructor() {
        this.assignmentService = new assignment_service_1.AssignmentService();
    }
    async createAssignment(req, res) {
        try {
            const loggedInUserId = req.user.id;
            const { title, description, dueDate, subjectId, facultyId, semesterId, } = req.body;
            const newAssignment = await this.assignmentService.insertAssignment({
                title,
                description,
                dueDate: new Date(dueDate),
                teacherId: loggedInUserId,
                subjectId,
                facultyId,
                semesterId,
            }, loggedInUserId);
            res.status(201).json({
                message: "Assignment created successfully",
                data: newAssignment,
            });
        }
        catch (error) {
            console.error("Error creating assignment:", error);
            res.status(400).json({ message: "Failed to create assignment", error: error instanceof Error ? error.message : String(error) });
        }
    }
    async getAllAssignments(req, res) {
        const assignments = await this.assignmentService.getAllAssignments();
        res.status(200).json({
            message: "All assignments fetched successfully",
            data: assignments,
        });
    }
    async getAssignmentById(req, res) {
        const id = parseInt(req.params.id);
        const assignment = await this.assignmentService.getAssignmentById(id);
        if (!assignment) {
            return res.status(404).json({ message: "Assignment not found" });
        }
        res.status(200).json({
            message: "Assignment fetched successfully",
            data: assignment,
        });
    }
    async updateAssignment(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { title, description, dueDate, teacherId, subjectId, facultyId, semesterId, } = req.body;
            const updatedAssignment = await this.assignmentService.updateAssignment(id, {
                title,
                description,
                dueDate: dueDate ? new Date(dueDate) : undefined,
                teacherId,
                subjectId,
                facultyId,
                semesterId,
            });
            res.status(200).json({
                message: "Assignment updated successfully",
                data: updatedAssignment,
            });
        }
        catch (error) {
            res
                .status(404)
                .json({ message: "Assignment not found or update failed" });
        }
    }
    // DELETE ASSIGNMENT
    async deleteAssignment(req, res) {
        const id = parseInt(req.params.id);
        const loggedInUserId = req.user.id;
        await this.assignmentService.deleteAssignment(id, loggedInUserId);
        res.status(200).json({ message: "Assignment deleted successfully" });
    }
}
exports.AssignmentController = AssignmentController;
//# sourceMappingURL=assignment.controller.js.map