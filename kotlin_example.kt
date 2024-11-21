// 1. Пакети
package taskmanagement

// 2. Імпорт стандартної бібліотеки
import kotlin.collections.*

// Головна функція
fun main() {
    println("Вітаємо в Системі Управління Завданнями!")

    // 3. Змінні та константи
    val maxTasks = 10 // Константа
    var userName = "Адмін" // Змінна

    // 4. Списки (List)
    val tasks = mutableListOf<Task>(
        Task(1, "Налаштувати проект", false),
        Task(2, "Написати документацію", false)
    )

    // 5. Цикли
    println("Список завдань:")
    for (task in tasks) {
        println("- ID: ${task.id}, Назва: ${task.name}, Виконано: ${task.completed}")
    }

    // 6. Функції
    addTask(tasks, Task(3, "Перевірити код", false))

    // 7. Лямбда-функції
    val incompleteTasks = tasks.filter { !it.completed }
    println("Незавершені завдання:")
    incompleteTasks.forEach { println("- ${it.name}") }

    // 8. Класи та властивості
    val newTask = Task(4, "Оптимізувати проект", false)
    tasks.add(newTask)

    // 9. Умови
    if (tasks.size > maxTasks) {
        println("Максимальна кількість завдань перевищена!")
    } else {
        println("Зараз у вас ${tasks.size} завдань.")
    }

    // 10. Exception Handling
    try {
        completeTask(tasks, 2)
        completeTask(tasks, 100) // Помилка: завдання з ID 100 не існує
    } catch (e: Exception) {
        println("Помилка: ${e.message}")
    }
}

// 6. Функція для додавання завдання
fun addTask(tasks: MutableList<Task>, task: Task) {
    tasks.add(task)
    println("Додано нове завдання: ${task.name}")
}

// Функція для позначення завдання як завершеного
fun completeTask(tasks: MutableList<Task>, id: Int) {
    val task = tasks.find { it.id == id }
    if (task != null) {
        task.completed = true
        println("Завдання з ID $id позначено як завершене.")
    } else {
        throw Exception("Завдання з ID $id не знайдено.")
    }
}

// 8. Клас Task з властивостями
data class Task(
    val id: Int,
    val name: String,
    var completed: Boolean
)
