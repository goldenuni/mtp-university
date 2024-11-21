use strict;
use warnings;

# 1. Масиви (Arrays)
my @tasks = (
    { id => 1, name => "Налаштувати проект", completed => 0 },
    { id => 2, name => "Написати документацію", completed => 0 }
);

# 2. Цикли
print "Список завдань:\n";
foreach my $task (@tasks) {
    print "ID: $task->{id}, Назва: $task->{name}, Виконано: ", $task->{completed} ? "Так" : "Ні", "\n";
}

# 3. Умови
my $max_tasks = 10;
if (scalar(@tasks) < $max_tasks) {
    push @tasks, { id => 3, name => "Перевірити код", completed => 0 };
    print "Додано нове завдання.\n";
} else {
    print "Досягнуто максимальну кількість завдань.\n";
}

# 4. Функції
sub complete_task {
    my ($tasks, $id) = @_;
    foreach my $task (@$tasks) {
        if ($task->{id} == $id) {
            $task->{completed} = 1;
            print "Завдання з ID $id позначено як виконане.\n";
            return;
        }
    }
    print "Завдання з ID $id не знайдено.\n";
}

# Позначаємо завдання як завершене
complete_task(\@tasks, 1);

# 5. Анонімні функції
my @incomplete_tasks = grep { !$_->{completed} } @tasks;
print "Незавершені завдання:\n";
foreach my $task (@incomplete_tasks) {
    print "- $task->{name}\n";
}

# 6. Хеші (Hashes)
my %task_manager = (
    add_task => sub {
        my ($tasks, $id, $name) = @_;
        push @$tasks, { id => $id, name => $name, completed => 0 };
        print "Додано завдання: $name\n";
    },
    display_tasks => sub {
        my ($tasks) = @_;
        foreach my $task (@$tasks) {
            print "ID: $task->{id}, Назва: $task->{name}, Виконано: ", $task->{completed} ? "Так" : "Ні", "\n";
        }
    }
);

# 7. Використання функцій з хешу
$task_manager{add_task}->(\@tasks, 4, "Оптимізувати проект");
$task_manager{display_tasks}->(\@tasks);

# 8. Константи
use constant MAX_TASKS => 10;
print "Максимальна кількість завдань: ", MAX_TASKS, "\n";

# 9. Регулярні вирази
my $search = "код";
print "Пошук завдань, що містять '$search':\n";
foreach my $task (@tasks) {
    if ($task->{name} =~ /$search/i) {
        print "- $task->{name}\n";
    }
}

# 10. Обробка винятків (eval)
eval {
    my $result = 1 / 0;  # Ділення на нуль
};
if ($@) {
    print "Виняток: $@\n";
}
