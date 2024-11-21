// 1. Оголошення класу
public class TaskManager {
  // 2. Поля (fields)
  private int id;
  private String name;
  private boolean completed;

  // 3. Конструктор (constructor)
  public TaskManager(int id, String name, boolean completed) {
      this.id = id;
      this.name = name;
      this.completed = completed;
  }

  // 4. Методи (methods)
  public void markAsCompleted() {
      this.completed = true;
  }

  public String getStatus() {
      return completed ? "Виконано" : "Не виконано";
  }

  @Override
  public String toString() {
      return "ID: " + id + ", Назва: " + name + ", Статус: " + getStatus();
  }

  // Головний метод
  public static void main(String[] args) {
      // 5. Масиви (arrays)
      TaskManager[] tasks = {
          new TaskManager(1, "Налаштувати проект", false),
          new TaskManager(2, "Написати документацію", false)
      };

      // 6. Цикли (loops)
      System.out.println("Список завдань:");
      for (TaskManager task : tasks) {
          System.out.println(task);
      }

      // 7. Умови (if-else)
      if (tasks.length < 10) {
          TaskManager newTask = new TaskManager(3, "Перевірити код", false);
          System.out.println("\nДодано нове завдання:");
          System.out.println(newTask);
      } else {
          System.out.println("\nДосягнуто максимальну кількість завдань.");
      }

      // 8. Використання статичних методів
      System.out.println("\nЗавдання після оновлення статусу:");
      tasks[0].markAsCompleted();
      for (TaskManager task : tasks) {
          System.out.println(task);
      }

      // 9. Робота з рядками (String)
      String search = "код";
      System.out.println("\nПошук завдань, що містять '" + search + "':");
      for (TaskManager task : tasks) {
          if (task.name.toLowerCase().contains(search)) {
              System.out.println(task);
          }
      }

      // 10. Обробка винятків (try-catch)
      try {
          int result = 1 / 0; // Помилка ділення на нуль
      } catch (ArithmeticException e) {
          System.out.println("\nПомилка: " + e.getMessage());
      }
  }
}
