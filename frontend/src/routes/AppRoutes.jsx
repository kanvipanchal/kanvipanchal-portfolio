import { Routes, Route } from 'react-router-dom'
import MainLayout from '@layouts/MainLayout.jsx'
import AdminLayout from '@layouts/AdminLayout.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

import Home from '@pages/Home.jsx'
import About from '@pages/About.jsx'
import Experience from '@pages/Experience.jsx'
import ClientWork from '@pages/ClientWork.jsx'
import ClientWorkDetail from '@pages/ClientWorkDetail.jsx'
import Projects from '@pages/Projects.jsx'
import ProjectDetail from '@pages/ProjectDetail.jsx'
import Skills from '@pages/Skills.jsx'
import Services from '@pages/Services.jsx'
import Contact from '@pages/Contact.jsx'
import Blog from '@pages/Blog.jsx'
import BlogDetail from '@pages/BlogDetail.jsx'
import Testimonials from '@pages/Testimonials.jsx'
import Resume from '@pages/Resume.jsx'
import Github from '@pages/Github.jsx'
import DataPolicyPage from '@pages/DataPolicyPage.jsx'
import NotFound from '@pages/NotFound.jsx'

import AdminLogin from '@pages/admin/Login.jsx'
import AdminDashboard from '@pages/admin/Dashboard.jsx'
import AdminProjects from '@pages/admin/Projects.jsx'
import AdminBlog from '@pages/admin/Blog.jsx'
import AdminInquiries from '@pages/admin/Inquiries.jsx'
import AdminSettings from '@pages/admin/Settings.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/client-work" element={<ClientWork />} />
        <Route path="/client-work/:id" element={<ClientWorkDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/tech-stack" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/github" element={<Github />} />
        <Route path="/privacy-policy" element={<DataPolicyPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="inquiries" element={<AdminInquiries />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>
    </Routes>
  )
}
