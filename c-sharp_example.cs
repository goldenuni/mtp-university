using System;
using System.Collections.Generic;
using System.Linq;

// 1. Простір імен та визначення класу
namespace TaskManagement
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Вітаємо в Системі Управління Завданнями!");

            // 2. Змінні та константи
            const int MaxTasks = 10; // Максимальна кількість завдань
            string systemUser = "Адмін"; // Поточний користувач системи

            // 3. Масиви
            string[] initialTasks = { "Налаштувати проект", "Написати документацію" };

            // 4. Список і узагальнення (Generics)
            List<Task> taskList = new List<Task>
            {
                new Task { Id = 1, Name = "Налаштувати проект", Completed = false },
                new Task { Id = 2, Name = "Написати документацію", Completed = false }
            };

            // 5. LINQ-запит
            var pendingTasks = taskList.Where(t => !t.Completed).ToList(); // Отримати незавершені завдання
            Console.WriteLine("Незавершені завдання:");
            pendingTasks.ForEach(t => Console.WriteLine($"- {t.Name}"));

            // 6. Класи та об'єкти
            Task newTask = new Task { Id = 3, Name = "Ревізія коду", Completed = false };
            taskList.Add(newTask); // Додати нове завдання до списку

            // 7. Обробка винятків
            try
            {
                if (taskList.Count > MaxTasks)
                {
                    throw new Exception("Ліміт завдань перевищено!");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Помилка: {ex.Message}");
            }

            // 8. Методи
            CompleteTask(taskList, 1); // Позначити завдання як виконане

            // 9. Делегати та лямбда-вирази
            Action<string> notify = message => Console.WriteLine($"Сповіщення: {message}");
            notify("Завдання 1 позначено як завершене!");

            // 10. Властивості (використовуються в класі Task)
            foreach (var task in taskList)
            {
                Console.WriteLine($"ID завдання: {task.Id}, Назва: {task.Name}, Виконано: {task.Completed}");
            }
        }

        // Метод для завершення завдання
        static void CompleteTask(List<Task> tasks, int taskId)
        {
            var task = tasks.FirstOrDefault(t => t.Id == taskId);
            if (task != null)
            {
                task.Completed = true; // Позначити завдання як завершене
            }
        }
    }

    // Визначення класу з властивостями
    class Task
    {
        public int Id { get; set; } // Ідентифікатор завдання
        public string Name { get; set; } // Назва завдання
        public bool Completed { get; set; } // Чи завершене завдання
    }
}
