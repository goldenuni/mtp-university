<?php
// 1. Простори імен
namespace TaskManagement;

// 2. Клас та властивості
class Task {
    public int $id;
    public string $name;
    public bool $completed;

    // Конструктор
    public function __construct(int $id, string $name, bool $completed = false) {
        $this->id = $id;
        $this->name = $name;
        $this->completed = $completed;
    }
}

// Глобальні функції
// 3. Масиви
function getTasks(): array {
    return [
        new Task(1, "Налаштувати проект"),
        new Task(2, "Написати документацію")
    ];
}

// 4. Умови
function checkTaskLimit(array $tasks, int $maxTasks): void {
    if (count($tasks) > $maxTasks) {
        echo "Ліміт завдань перевищено!<br>";
    } else {
        echo "Завдання в межах дозволеного ліміту.<br>";
    }
}

// 5. Цикли
function displayTasks(array $tasks): void {
    foreach ($tasks as $task) {
        echo "ID: {$task->id}, Назва: {$task->name}, Виконано: " . ($task->completed ? "Так" : "Ні") . "<br>";
    }
}

// 6. Анонімні функції
function filterIncompleteTasks(array $tasks): array {
    return array_filter($tasks, fn($task) => !$task->completed);
}

// 7. Класи і методи
class TaskManager {
    public array $tasks;

    public function __construct(array $tasks) {
        $this->tasks = $tasks;
    }

    public function addTask(Task $task): void {
        $this->tasks[] = $task;
        echo "Додано завдання: {$task->name}<br>";
    }

    public function completeTask(int $id): void {
        foreach ($this->tasks as $task) {
            if ($task->id === $id) {
                $task->completed = true;
                echo "Завдання з ID $id позначено як виконане.<br>";
                return;
            }
        }
        echo "Завдання з ID $id не знайдено.<br>";
    }
}

// 8. Константи
define('MAX_TASKS', 10);

// Головна програма
// 9. Використання функцій
$tasks = getTasks();
displayTasks($tasks);

checkTaskLimit($tasks, MAX_TASKS);

// 10. Використання об'єктів
$taskManager = new TaskManager($tasks);
$taskManager->addTask(new Task(3, "Перевірити код"));
$taskManager->completeTask(1);

echo "Незавершені завдання:<br>";
$incompleteTasks = filterIncompleteTasks($taskManager->tasks);
displayTasks($incompleteTasks);
