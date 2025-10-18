import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const teachers = [
    {
      name: 'Анна Петрова',
      role: 'Преподаватель программирования',
      experience: '8 лет опыта',
      image: 'https://cdn.poehali.dev/projects/f49a38e8-0b3c-48b6-bf0e-d66885a81b57/files/6338f0d5-4cec-4423-b717-1e2dcaa5b8d6.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Преподаватель дизайна',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/f49a38e8-0b3c-48b6-bf0e-d66885a81b57/files/6338f0d5-4cec-4423-b717-1e2dcaa5b8d6.jpg'
    },
    {
      name: 'Мария Иванова',
      role: 'Преподаватель маркетинга',
      experience: '6 лет опыта',
      image: 'https://cdn.poehali.dev/projects/f49a38e8-0b3c-48b6-bf0e-d66885a81b57/files/6338f0d5-4cec-4423-b717-1e2dcaa5b8d6.jpg'
    }
  ];

  const features = [
    {
      icon: 'BookOpen',
      title: 'Практические курсы',
      description: 'Обучение на реальных проектах с применением знаний'
    },
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Профессионалы с многолетним опытом работы'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Официальные документы о прохождении обучения'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное для вас время'
    }
  ];

  const faqs = [
    {
      question: 'Как начать обучение на платформе?',
      answer: 'Зарегистрируйтесь на сайте, выберите интересующий курс и начните обучение сразу после оплаты.'
    },
    {
      question: 'Какой формат обучения?',
      answer: 'Обучение проходит в формате видеоуроков, практических заданий и живых вебинаров с преподавателями.'
    },
    {
      question: 'Как получить сертификат?',
      answer: 'Сертификат выдается автоматически после успешного завершения всех модулей курса и прохождения финального теста.'
    },
    {
      question: 'Есть ли поддержка во время обучения?',
      answer: 'Да, вы можете задавать вопросы преподавателям в чате курса и получать обратную связь по домашним заданиям.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">EduSpace</h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О платформе</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Войти</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Обучение <span className="text-primary">будущего</span> начинается здесь
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Получайте знания от лучших преподавателей, развивайтесь в своем темпе и получайте сертификаты о прохождении курсов
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Посмотреть курсы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f49a38e8-0b3c-48b6-bf0e-d66885a81b57/files/b0071124-9a71-4112-9738-fed9df1c12e9.jpg" 
                alt="Обучение" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы своего дела с многолетним опытом работы и преподавания
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base">{teacher.role}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{teacher.experience}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О платформе EduSpace</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EduSpace — современная образовательная платформа, которая объединяет лучших преподавателей и студентов со всего мира.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы создаем комфортную среду для обучения, где каждый может развивать свои навыки в удобном темпе и получать поддержку экспертов.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Качественный контент</h3>
                    <p className="text-muted-foreground">Все курсы разработаны профессионалами и регулярно обновляются</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Практический подход</h3>
                    <p className="text-muted-foreground">Закрепляйте знания на реальных проектах и кейсах</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Сообщество</h3>
                    <p className="text-muted-foreground">Общайтесь с единомышленниками и расширяйте свою сеть контактов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/f49a38e8-0b3c-48b6-bf0e-d66885a81b57/files/00de203b-10b5-40a0-bc54-3e7e64a19a9f.jpg" 
                alt="Сертификат" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на часто задаваемые вопросы о платформе
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 bg-card shadow-md">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Остались вопросы? Напишите нам, и мы с радостью поможем
            </p>
          </div>
          <Card className="border-none shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="ivan@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, чем мы можем помочь..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">EduSpace</h3>
              <p className="text-background/70">
                Образовательная платформа нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Курсы</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-background transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-background transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-background transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="hover:text-background transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 EduSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
