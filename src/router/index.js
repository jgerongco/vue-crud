import { createRouter, createWebHistory } from 'vue-router'
import UserType from '../views/userType.vue'
import Login from '../views/LoginView.vue'
import AdminLogin from '../views/admin/Login.vue'
import AdminHome from '../views/admin/Home.vue'
import AdminRes from '../views/admin/Reserve.vue'
import AdminHistory from '../views/admin/History.vue'
import AdminReport from '../views/repo/View.vue'
import AdminReportCreate from '../views/repo/Create.vue'
import Home from '../views/HomeView.vue'
// import Reservation from '../views/Reservation.vue'
import Reservation from '../views/reserve/View.vue'
import ReservationCreate from '../views/reserve/Create.vue'
import StudentView from '../views/students/View.vue'
import StudentCreate from '../views/students/Create.vue'
import StudentEdit from '../views/students/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userType',
      component: UserType
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: Reservation,
      meta: { requiresAuth: true }
    },
    {
      path: '/reservation/create',
      name: 'reservationCreate',
      component: ReservationCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/students',
      name: 'students',
      component: StudentView,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/students/create',
      name: 'studentsCreate',
      component: StudentCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/students/:id/edit',
      name: 'studentsEdit',
      component: StudentEdit,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'Admin Login',
      component: AdminLogin
    },
    {
      path: '/admin/home',
      name: 'Admin Home',
      component: AdminHome,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/reservation',
      name: 'Reservation',
      component: AdminRes,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/history',
      name: 'History',
      component: AdminHistory,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin/report',
      name: 'Report',
      component: AdminReport,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin/report',
      name: 'Report',
      component: AdminReport,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin/report/create',
      name: 'ReportCreate',
      component: AdminReportCreate,
      meta: { requiresAuth: true } 
    },
   
  ]
});

// Navigation guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if there is an authentication token in local storage
    const token = localStorage.getItem('token');
    if (!token) {
      // If token doesn't exist, redirect to login page
      next('/');
    } else {
      // If token exists, allow access to the route
      next();
    }
  } else {
    // If the route doesn't require authentication, allow access
    next();
  }
});

export default router
