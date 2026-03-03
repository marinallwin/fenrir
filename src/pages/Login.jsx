import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Eye, EyeOff } from 'lucide-react';
import Button from '../components/common/Button';
import ThemeToggle from '../components/common/ThemeToggle';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAccepted: false
  });
  const navigate = useNavigate();

  // Check if all required fields are filled
  const isFormValid = formData.firstName.trim() !== '' && 
                     formData.lastName.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.password.trim() !== '' && 
                     formData.termsAccepted;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Navigate to dashboard after form submission
      navigate('/dashboard');
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      {/* Theme toggle - positioned absolutely */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <div className="flex h-full bg-gradient-to-br from-gray-900 via-gray-800 to-orange-500">
        {/* Left side - Content */}
        <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
          <div className="relative z-10 p-6 lg:p-8 xl:p-12 flex flex-col justify-between text-white w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">a</span>
              </div>
              <span className="text-xl font-semibold">aps</span>
            </div>

            {/* Main content */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Expert level Cybersecurity
                <br />
                in <span className="text-teal-400">hours</span> not weeks.
              </h1>

              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-base lg:text-lg font-medium text-gray-200">What's included</h2>
                
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
                      Effortlessly spider and map targets to uncover hidden security flaws
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
                      Deliver high-quality, validated findings in hours, not weeks.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
                      Generate professional, enterprise-grade security reports automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trustpilot rating */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <span className="text-green-400 text-base lg:text-lg">★</span>
                <span className="text-xs lg:text-sm font-medium text-gray-300">Trustpilot</span>
              </div>
              <div className="text-xs lg:text-sm text-gray-300">
                <span className="font-semibold text-white">Rated 4.5/5.0</span>
                <span className="ml-1 lg:ml-2">(100+ reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form Card */}
        <div className="flex-1 lg:flex-none lg:w-[420px] xl:w-[480px] 2xl:w-[520px] flex items-center justify-center p-4 lg:p-6">
          <div className="w-full max-w-md lg:max-w-none">
            {/* Mobile logo - only show on small screens */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">a</span>
              </div>
              <span className="text-xl font-semibold text-white">aps</span>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-xl lg:shadow-2xl p-4 sm:p-5 lg:p-6 border-0 relative">
              {/* Subtle shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/20 rounded-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-3 sm:mb-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">Sign up</h2>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Already have an account?{' '}
                    <button className="text-teal-500 hover:text-teal-600 font-medium transition-colors">
                      Log in
                    </button>
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <input
                      type="text"
                      placeholder="First name*"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-all duration-200 text-sm font-medium resize-none h-9 sm:h-10 box-border"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last name*"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-all duration-200 text-sm font-medium resize-none h-9 sm:h-10 box-border"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email address*"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-all duration-200 text-sm font-medium resize-none h-9 sm:h-10 box-border"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password (8+ characters)*"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full px-3 py-2 pr-9 sm:pr-10 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-all duration-200 text-sm font-medium resize-none h-9 sm:h-10 box-border"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2 2l2 2m0 0l2 2m-2-2l2-2M20 2l2 2m0 0l2 2m-2-2l2-2" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 4l1 1m0 0l1 1m-1-1l1-1M16 4l1 1m0 0l1 1m-1-1l1-1" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="flex items-start space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.termsAccepted}
                      onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                      className="mt-0.5 w-3.5 h-3.5 text-teal-500 border-gray-300 rounded focus:ring-teal-500/20 flex-shrink-0"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
                      I agree to Aps's{' '}
                      <button type="button" className="text-teal-500 hover:text-teal-600 transition-colors underline">
                        Terms & Conditions
                      </button>{' '}
                      and acknowledge the{' '}
                      <button type="button" className="text-teal-500 hover:text-teal-600 transition-colors underline">
                        Privacy Policy
                      </button>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={!isFormValid}
                      className={`w-full h-9 sm:h-10 text-white text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none px-3 ${
                        isFormValid 
                          ? 'bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:ring-2 focus:ring-teal-500/20 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer' 
                          : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-60'
                      }`}
                    >
                      Create account
                    </button>
                  </div>
                </form>

                {/* Social login */}
                <div className="mt-3">
                  <div className="flex space-x-2">
                    {/* Apple */}
                    <button className="flex-1 bg-black hover:bg-gray-800 text-white h-9 sm:h-10 rounded-full transition-colors flex items-center justify-center group px-2">
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </button>

                    {/* Google */}
                    <button className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 h-9 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center group hover:shadow-sm px-2">
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </button>

                    {/* Facebook */}
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-9 sm:h-10 rounded-full transition-colors flex items-center justify-center group px-2">
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;