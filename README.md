# Generating a timetable (https://ut-timetable-generator.vercel.app/)

Planning a new semester often involves the desire to enroll in many subjects. However, subjects usually have multiple groups, and each student has their own preferences for how they want their new schedule to look. Creating schedules in the ÕIS2 environment is cumbersome, as any student knows. Currently, to view possible schedules, one must change the groups for subjects one by one. Additionally, one must ensure that the times of the classes do not overlap for the chosen groups.

To simplify this process, we have developed a website that generates all possible different schedules with corresponding groups for the new semester for students. From these schedules, students can then choose the one that is most optimal for them.

Before generating schedules, you can also set your preferences for the schedule.

## Features

1. **Enter the codes of the subjects you want**
2. **Choose the tutorial groups you know you definitely want**
3. **If you want free days or hours in your schedule, select those**
4. **Generate all possible schedules**
5. **Learn more about the classes by clicking on them**

If it is not possible to generate a schedule under certain conditions, the website will provide a corresponding message.

## How It Works

1. **A Python program collects information on all subjects (about 2700 subjects) from ÕIS and formats this information into a JSON file.**
2. **The website sends the parameters of the subjects and tutorials entered by the user to the server. Server-side code creates different combinations with corresponding groups using a recursive algorithm. The created combinations are returned to the website.**
3. **The website displays the schedule information to the user.**

## Technologies

- TypeScript
- Python
- Next.js
- React
- Tailwind CSS

## Authors

- Daglas Aitsen, Johan Kirikal
- 1st year Bachelor's in Computer Science (ATI)

