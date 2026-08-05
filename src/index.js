import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// 🔴 1. أضف Sentry في أعلى الملف
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

// 🔴 2. تهيئة Sentry قبل تهيئة React root
Sentry.init({
  dsn: 'https://d64bc96420767101810801a09bce5992@o4509602222702592.ingest.us.sentry.io/4509602306654213',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  sendDefaultPii: true, // لإرسال عنوان IP أو معرفات المستخدم
});

// ✅ إعداد بيانات المستخدم والوسوم
Sentry.setUser({ email: 'wesbos@gmail.com' });
Sentry.setTag('git_commit', 'asdfas9d08f');
Sentry.setTag('userLevel', 'editor');

// 🔵 3. إعداد React Root
const root = ReactDOM.createRoot(document.getElementById('root'));

// 🔵 4. رندر التطبيق مع مزود Redux و Router
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        {/* ✅ عنصر App داخل ErrorBoundary */}
        <Sentry.ErrorBoundary fallback={<p>حدث خطأ تقني، نرجو المحاولة لاحقًا.</p>}>
          <App />
        </Sentry.ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// 🔵 5. إعدادات قياس الأداء (اختياري)
reportWebVitals();
