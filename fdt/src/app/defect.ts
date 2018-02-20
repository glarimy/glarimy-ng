export class Defect {
    id: number;
    description: string;
    status: string;
    priority: number;
    notes: string;
    files: string[];

    constructor(id: number, description: string, status: string, priority: number, notes: string, files: string[]) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.notes = notes;
        this.files = files;
    }
}
