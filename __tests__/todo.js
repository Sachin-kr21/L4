const todoList = require('../todo');
const {all , markAsComplete , add,overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add(
            {
                title: "Test todo1",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "Test todo2",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "Test todo3",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "Test todo2",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "Test todo2",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString("en-CA")
            }
        );
    })
    test("should add new todo", () => {
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });
    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
    test("Should check retrieval of overdue items",()=>{
        todaysDate=new Date().toLocaleDateString("en-CA")
        overdue().forEach(e=>{
            expect(e.dueDate<todaysDate).toBe(true)
        })
    })
    test("Should checks retrieval of due today items",()=>{
        todaysDate=new Date().toLocaleDateString("en-CA")
        dueToday().forEach(e=>{
            expect(e.dueDate===todaysDate).toBe(true)
        })
    })
    test("Should checks retrieval of due later items",()=>{
        todaysDate=new Date().toLocaleDateString("en-CA")
        dueLater().forEach(e=>{
            expect(e.dueDate>todaysDate).toBe(true)
        })
    })

})
