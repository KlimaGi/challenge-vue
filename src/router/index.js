import { createRouter, createWebHistory } from "vue-router";
import TodayPlan from "../pages/TodayPlan";
import TimeLine from "../pages/TimeLine";
import LessonList from "../pages/LessonList";
import About from "../pages/About";

const routes = [
  {
    path: "/",
    name: "Today Plan",
    component: TodayPlan,
    // was Home
  },
  {
    path: "/time-line",
    name: "Time Line",
    component: TimeLine,
  },
  {
    path: "/lesson-list",
    name: "Lesson List",
    component: LessonList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
