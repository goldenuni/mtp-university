# 1. Оголошення класу
class Task
  attr_accessor :id, :name, :completed

  # 2. Конструктор (initialize)
  def initialize(id, name, completed = false)
    @id = id
    @name = name
    @completed = completed
  end
end

# 3. Масив (Array)
tasks = [
  Task.new(1, 'Налаштувати проект'),
  Task.new(2, 'Написати документацію')
]

# 4. Цикли
puts "Список завдань:"
tasks.each do |task|
  puts "ID: #{task.id}, Назва: #{task.name}, Виконано: #{task.completed ? 'Так' : 'Ні'}"
end

# 5. Умови
if tasks.size < 10
  tasks << Task.new(3, 'Перевірити код')
  puts 'Додано нове завдання.'
else
  puts 'Досягнуто максимальну кількість завдань.'
end

# 6. Методи (функції)
def complete_task(tasks, id)
  task = tasks.find { |t| t.id == id }
  if task
    task.completed = true
    puts "Завдання з ID #{id} позначено як виконане."
  else
    puts "Завдання з ID #{id} не знайдено."
  end
end

# Позначаємо завдання як завершене
complete_task(tasks, 1)

# 7. Анонімні функції (Proc/Lambda)
incomplete_tasks = tasks.select { |task| !task.completed }
puts "Незавершені завдання:"
incomplete_tasks.each { |task| puts "- #{task.name}" }

# 8. Класи в дії
class TaskManager
  attr_accessor :tasks

  def initialize
    @tasks = []
  end

  def add_task(task)
    @tasks << task
    puts "Додано завдання: #{task.name}"
  end

  def display_tasks
    @tasks.each do |task|
      puts "ID: #{task.id}, Назва: #{task.name}, Виконано: #{task.completed ? 'Так' : 'Ні'}"
    end
  end
end

# 9. Використання об'єкта
manager = TaskManager.new
manager.add_task(Task.new(4, 'Оптимізувати проект'))
manager.display_tasks

# 10. Обробка винятків
begin
  puts "Ділимо на нуль для перевірки винятку..."
  result = 1 / 0
rescue ZeroDivisionError => e
  puts "Помилка: #{e.message}"
end
