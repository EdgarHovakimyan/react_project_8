export interface IStudents {
    id: number
    name: string
    surname: string
    groupId?: number
}
export interface IGroups {
    id: number
    groupName: string
    students: IStudents[]
}