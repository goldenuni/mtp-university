package main

import (
	"fmt"
	"sort"
)

// 1. Визначення структур
type Task struct {
	ID        int
	Name      string
	Completed bool
}

// 2. Константи
const MaxTasks = 10 // Максимальна кількість завдань

func main() {
	// 3. Змінні
	var tasks []Task // Змінна типу "список завдань"

	// Додавання початкових завдань
	tasks = append(tasks, Task{ID: 1, Name: "Налаштувати проект", Completed: false})
	tasks = append(tasks, Task{ID: 2, Name: "Написати документацію", Completed: false})

	// 4. Цикли
	fmt.Println("Список завдань:")
	for _, task := range tasks {
		fmt.Printf("- ID: %d, Назва: %s, Виконано: %t\n", task.ID, task.Name, task.Completed)
	}

	// 5. Карти (Maps)
	statusCount := make(map[bool]int)
	for _, task := range tasks {
		statusCount[task.Completed]++
	}

	// 6. Умови
	if len(tasks) < MaxTasks {
		tasks = append(tasks, Task{ID: 3, Name: "Перевірити код", Completed: false})
		fmt.Println("Додано нове завдання.")
	} else {
		fmt.Println("Максимальна кількість завдань досягнута!")
	}

	// 7. Анонімні функції
	printTaskNames := func(t []Task) {
		fmt.Println("Назви завдань:")
		for _, task := range t {
			fmt.Println("-", task.Name)
		}
	}
	printTaskNames(tasks)

	// 8. Сортування (Використання вбудованих функцій)
	sort.Slice(tasks, func(i, j int) bool {
		return tasks[i].Name < tasks[j].Name
	})
	fmt.Println("Завдання після сортування за назвою:")
	for _, task := range tasks {
		fmt.Printf("- ID: %d, Назва: %s\n", task.ID, task.Name)
	}

	// 9. Виклик функцій
	completeTask(&tasks, 1) // Позначаємо завдання з ID 1 як виконане

	// 10. Паніка та відновлення (Panic and Recover)
	defer handlePanic() // Відновлення у разі помилки
	if len(tasks) > MaxTasks {
		panic("Кількість завдань перевищує дозволений ліміт!") // Виклик паніки
	}
}

// Функція для позначення завдання як завершеного
func completeTask(tasks *[]Task, id int) {
	for i, task := range *tasks {
		if task.ID == id {
			(*tasks)[i].Completed = true
			fmt.Printf("Завдання з ID %d позначено як виконане.\n", id)
			return
		}
	}
	fmt.Printf("Завдання з ID %d не знайдено.\n", id)
}

// Відновлення після паніки
func handlePanic() {
	if r := recover(); r != nil {
		fmt.Println("Відновлення після паніки:", r)
	}
}
