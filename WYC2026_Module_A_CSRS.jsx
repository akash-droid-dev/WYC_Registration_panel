import React, { useState, useMemo } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Menu, X, Search, Filter, Download, Plus, Edit2, Trash2, Eye, ChevronRight, ChevronDown, Settings, FileText, User, Users, Clock, AlertCircle, CheckCircle, Home, LogOut, Bell, Upload, Calendar, MapPin, Shield, Award, Phone, Mail, Globe, ArrowRight, MoreVertical, Check, XCircle, Info, RefreshCw, Lock, ChevronUp, ExternalLink, Copy } from 'lucide-react';

const WYC2026CSRS = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const delegations = [
    { id: 1, name: 'India', country: 'India', federation: 'Indian Yoga Federation', contact: '+91-11-4000-5000', type: 'National' },
    { id: 2, name: 'Japan', country: 'Japan', federation: 'Japan Yoga Society', contact: '+81-3-1234-5678', type: 'National' },
    { id: 3, name: 'USA', country: 'United States', federation: 'American Yoga Alliance', contact: '+1-202-555-0100', type: 'National' },
    { id: 4, name: 'Brazil', country: 'Brazil', federation: 'Brazilian Yoga Federation', contact: '+55-11-98765-4321', type: 'National' },
    { id: 5, name: 'Thailand', country: 'Thailand', federation: 'Thailand Sports Ministry', contact: '+66-2-1234-5678', type: 'National' },
    { id: 6, name: 'Germany', country: 'Germany', federation: 'German Yoga Association', contact: '+49-30-1234-5678', type: 'National' }
  ];

  const participants = [
    { id: 1, wycId: 'WYC-2026-001', appId: 'APP-001', name: 'Raj Kumar', role: 'Athlete', subRole: 'Male Individual', delegation: 'India', country: 'India', status: 'Approved', submitted: '2026-02-15', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 2, wycId: 'WYC-2026-002', appId: 'APP-002', name: 'Priya Singh', role: 'Athlete', subRole: 'Female Group', delegation: 'India', country: 'India', status: 'Approved', submitted: '2026-02-14', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 3, wycId: 'WYC-2026-003', appId: 'APP-003', name: 'Tanaka Yuki', role: 'Athlete', subRole: 'Male Individual', delegation: 'Japan', country: 'Japan', status: 'Pending', submitted: '2026-02-25', documents: { photo: true, id: true, passport: false, medical: true, undertaking: true } },
    { id: 4, wycId: 'WYC-2026-004', appId: 'APP-004', name: 'Sarah Johnson', role: 'Support Staff', subRole: 'Physiotherapist', delegation: 'USA', country: 'United States', status: 'Correction Requested', submitted: '2026-02-23', documents: { photo: true, id: false, passport: true, medical: false, undertaking: true } },
    { id: 5, wycId: 'WYC-2026-005', appId: 'APP-005', name: 'Marco Silva', role: 'Athlete', subRole: 'Male Group', delegation: 'Brazil', country: 'Brazil', status: 'Approved', submitted: '2026-02-10', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 6, wycId: 'WYC-2026-006', appId: 'APP-006', name: 'Felipe Costa', role: 'Athlete', subRole: 'Male Individual', delegation: 'Brazil', country: 'Brazil', status: 'Approved', submitted: '2026-02-09', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 7, wycId: 'WYC-2026-007', appId: 'APP-007', name: 'Somchai Thani', role: 'Tech Official', subRole: 'Judging Panel', delegation: 'Thailand', country: 'Thailand', status: 'Submitted', submitted: '2026-02-26', documents: { photo: true, id: true, passport: true, medical: true, undertaking: false } },
    { id: 8, wycId: 'WYC-2026-008', appId: 'APP-008', name: 'Anna Mueller', role: 'Support Staff', subRole: 'Coach', delegation: 'Germany', country: 'Germany', status: 'Approved', submitted: '2026-02-08', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 9, wycId: 'WYC-2026-009', appId: 'APP-009', name: 'Lisa Wang', role: 'Athlete', subRole: 'Female Individual', delegation: 'USA', country: 'United States', status: 'Approved', submitted: '2026-02-12', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 10, wycId: 'WYC-2026-010', appId: 'APP-010', name: 'Emiko Tanaka', role: 'Support Staff', subRole: 'Doctor', delegation: 'Japan', country: 'Japan', status: 'Approved', submitted: '2026-02-11', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 11, wycId: 'WYC-2026-011', appId: 'APP-011', name: 'Deepak Patel', role: 'Athlete', subRole: 'Male Group', delegation: 'India', country: 'India', status: 'Draft', submitted: '2026-02-24', documents: { photo: true, id: false, passport: false, medical: false, undertaking: false } },
    { id: 12, wycId: 'WYC-2026-012', appId: 'APP-012', name: 'Carolina Dias', role: 'Athlete', subRole: 'Female Group', delegation: 'Brazil', country: 'Brazil', status: 'Pending', submitted: '2026-02-26', documents: { photo: true, id: true, passport: true, medical: false, undertaking: true } },
    { id: 13, wycId: 'WYC-2026-013', appId: 'APP-013', name: 'Klaus Wagner', role: 'Tech Official', subRole: 'Coordinator', delegation: 'Germany', country: 'Germany', status: 'Approved', submitted: '2026-02-07', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 14, wycId: 'WYC-2026-014', appId: 'APP-014', name: 'Aree Somchai', role: 'Athlete', subRole: 'Female Individual', delegation: 'Thailand', country: 'Thailand', status: 'Correction Requested', submitted: '2026-02-22', documents: { photo: false, id: true, passport: true, medical: true, undertaking: true } },
    { id: 15, wycId: 'WYC-2026-015', appId: 'APP-015', name: 'David Miller', role: 'Support Staff', subRole: 'Trainer', delegation: 'USA', country: 'United States', status: 'Approved', submitted: '2026-02-06', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 16, wycId: 'WYC-2026-016', appId: 'APP-016', name: 'Neha Sharma', role: 'Athlete', subRole: 'Female Group', delegation: 'India', country: 'India', status: 'Submitted', submitted: '2026-02-27', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } },
    { id: 17, wycId: 'WYC-2026-017', appId: 'APP-017', name: 'Hiroshi Yamada', role: 'Athlete', subRole: 'Male Group', delegation: 'Japan', country: 'Japan', status: 'Approved', submitted: '2026-02-05', documents: { photo: true, id: true, passport: true, medical: true, undertaking: true } }
  ];

  const analyticsData = {
    registrationsByStatus: [
      { name: 'Approved', value: 10 },
      { name: 'Pending', value: 3 },
      { name: 'Submitted', value: 2 },
      { name: 'Correction Requested', value: 2 }
    ],
    participantsByRole: [
      { name: 'Athlete', value: 11 },
      { name: 'Support Staff', value: 4 },
      { name: 'Tech Official', value: 2 }
    ],
    dailySubmissions: [
      { date: 'Feb 20', count: 2 },
      { date: 'Feb 21', count: 1 },
      { date: 'Feb 22', count: 2 },
      { date: 'Feb 23', count: 1 },
      { date: 'Feb 24', count: 2 },
      { date: 'Feb 25', count: 2 },
      { date: 'Feb 26', count: 3 },
      { date: 'Feb 27', count: 1 }
    ]
  };

  const handleLogin = (role) => {
    setUser(delegations[0]);
    setUserRole(role);
    setCurrentScreen(role === 'delegator' ? 'delegation-dashboard' : 'verification-queue');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
    setUser(null);
    setUserRole(null);
  };

  const getStatusColor = (status) => {
    const colors = {
      'Approved': { bg: '#F0FDF4', text: '#166534' },
      'Pending': { bg: '#FEF3C7', text: '#92400E' },
      'Submitted': { bg: '#EFF6FF', text: '#1E40AF' },
      'Correction Requested': { bg: '#FEE2E2', text: '#991B1B' },
      'Draft': { bg: '#F3F4F6', text: '#374151' }
    };
    return colors[status] || { bg: '#F3F4F6', text: '#374151' };
  };

  const HeaderNav = () => (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4">
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-700 hover:text-gray-900">
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="flex-1 flex items-center gap-2">
        <Award size={28} className="text-rose-600" />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-900">WYC 2026 - CSRS</h1>
          <p className="text-xs text-gray-500">Centralised Sports Repository System</p>
        </div>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-600 rounded-full"></span>
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition">
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      )}
    </div>
  );

  const Sidebar = () => (
    <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}>
      <div className="p-6 space-y-1">
        {userRole === 'delegator' && (
          <>
            <button onClick={() => setCurrentScreen('delegation-dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentScreen === 'delegation-dashboard' ? 'bg-gray-100 text-rose-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              <Home size={20} /> <span className="font-medium">Dashboard</span>
            </button>
            <button onClick={() => setCurrentScreen('participant-form')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentScreen === 'participant-form' ? 'bg-gray-100 text-rose-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              <Plus size={20} /> <span className="font-medium">Add Participant</span>
            </button>
            <button onClick={() => setCurrentScreen('participant-repository')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentScreen === 'participant-repository' ? 'bg-gray-100 text-rose-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              <FileText size={20} /> <span className="font-medium">Repository</span>
            </button>
          </>
        )}
        {userRole === 'verifier' && (
          <>
            <button onClick={() => setCurrentScreen('verification-queue')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentScreen === 'verification-queue' ? 'bg-gray-100 text-rose-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              <Shield size={20} /> <span className="font-medium">Verification Queue</span>
            </button>
            <button onClick={() => setCurrentScreen('participant-repository')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentScreen === 'participant-repository' ? 'bg-gray-100 text-rose-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              <Users size={20} /> <span className="font-medium">Repository</span>
            </button>
            <button onClick={() => setCurrentScreen('analytics')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentScreen === 'analytics' ? 'bg-gray-100 text-rose-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              <BarChart size={20} /> <span className="font-medium">Analytics</span>
            </button>
          </>
        )}
      </div>
    </div>
  );

  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center">
              <Award size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">WYC 2026</h1>
          <p className="text-center text-gray-600 mb-8">Centralised Sports Repository System</p>

          <div className="space-y-4 mb-8">
            <button onClick={() => handleLogin('delegator')} className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 rounded-lg transition">
              Delegation Login
            </button>
            <button onClick={() => handleLogin('verifier')} className="w-full bg-slate-500 hover:bg-slate-600 text-white font-medium py-3 rounded-lg transition">
              Verifier Login
            </button>
          </div>

          <div className="space-y-4 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800"><strong>Demo Credentials:</strong></p>
              <p className="text-xs text-blue-700 mt-2">Delegation: Any national federation representative</p>
              <p className="text-xs text-blue-700">Verifier: Admin verification team member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DelegationDashboard = () => {
    const delegationParticipants = participants.filter(p => p.delegation === user.name);
    const stats = {
      total: delegationParticipants.length,
      approved: delegationParticipants.filter(p => p.status === 'Approved').length,
      pending: delegationParticipants.filter(p => p.status === 'Pending').length,
      draft: delegationParticipants.filter(p => p.status === 'Draft').length,
      correction: delegationParticipants.filter(p => p.status === 'Correction Requested').length
    };

    return (
      <div className="p-8 space-y-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Delegation Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div><p className="text-sm text-gray-600">Delegation</p><p className="font-semibold text-gray-900">{user.name}</p></div>
            <div><p className="text-sm text-gray-600">Country</p><p className="font-semibold text-gray-900">{user.country}</p></div>
            <div><p className="text-sm text-gray-600">Federation</p><p className="font-semibold text-gray-900">{user.federation}</p></div>
            <div><p className="text-sm text-gray-600">Contact</p><p className="font-semibold text-gray-900">{user.contact}</p></div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            <p className="text-sm text-gray-600 mt-1">Total Participants</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
            <p className="text-sm text-gray-600 mt-1">Approved</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            <p className="text-sm text-gray-600 mt-1">Pending</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{stats.correction}</p>
            <p className="text-sm text-gray-600 mt-1">Corrections</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-600">{stats.draft}</p>
            <p className="text-sm text-gray-600 mt-1">Draft</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900">Participant Roster</h3>
            <button onClick={() => setCurrentScreen('participant-form')} className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition">
              <Plus size={18} /> Add Participant
            </button>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Sub-role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {delegationParticipants.map((p, idx) => {
                const colors = getStatusColor(p.status);
                return (
                  <tr key={p.id} className={idx % 2 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.subRole}</td>
                    <td className="px-6 py-4 text-sm"><span style={{ ...colors, padding: '0.25rem 0.75rem' }} className="rounded-full text-xs font-medium">{p.status}</span></td>
                    <td className="px-6 py-4 text-center"><button className="text-rose-600 hover:text-rose-700"><Eye size={18} /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-lg transition">Submit All</button>
      </div>
    );
  };

  const ParticipantForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '', gender: '', dob: '', nationality: '', role: '', subRole: '', photo: null
    });

    const steps = ['Personal Info', 'Role Details', 'Documents', 'Review'];

    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex justify-between">
            {steps.map((s, idx) => (
              <div key={idx} className="flex-1 flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${idx + 1 <= step ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {idx + 1}
                </div>
                <p className={`text-sm font-medium ml-2 ${idx + 1 <= step ? 'text-gray-900' : 'text-gray-500'}`}>{s}</p>
                {idx < steps.length - 1 && <div className={`flex-1 h-1 mx-4 ${idx + 1 < step ? 'bg-rose-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
              <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600" />
              <div className="grid grid-cols-2 gap-4">
                <select value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="date" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600" />
              </div>
              <input type="text" placeholder="Nationality" value={formData.nationality} onChange={(e) => setFormData({...formData, nationality: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600" />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-rose-600 transition">
                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm font-medium text-gray-900">Upload Photo</p>
                <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Role Details</h3>
              <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value, subRole: ''})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600">
                <option value="">Select Role</option>
                <option value="Athlete">Athlete</option>
                <option value="Support Staff">Support Staff</option>
                <option value="Tech Official">Tech Official</option>
              </select>
              {formData.role && (
                <select value={formData.subRole} onChange={(e) => setFormData({...formData, subRole: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600">
                  <option value="">Select Sub-role</option>
                  {formData.role === 'Athlete' && (
                    <>
                      <option value="Male Individual">Male Individual</option>
                      <option value="Female Individual">Female Individual</option>
                      <option value="Male Group">Male Group</option>
                      <option value="Female Group">Female Group</option>
                    </>
                  )}
                  {formData.role === 'Support Staff' && (
                    <>
                      <option value="Coach">Coach</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Trainer">Trainer</option>
                    </>
                  )}
                  {formData.role === 'Tech Official' && (
                    <>
                      <option value="Judging Panel">Judging Panel</option>
                      <option value="Coordinator">Coordinator</option>
                    </>
                  )}
                </select>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Required Documents</h3>
              {['Photo', 'Government ID', 'Passport', 'Medical Certificate', 'Undertaking'].map((doc, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc}</p>
                      <p className="text-xs text-gray-500">PDF, JPG, PNG</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm font-medium">Upload</button>
                </div>
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Review & Submit</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <p><span className="text-gray-600">Name:</span> <span className="font-semibold text-gray-900">{formData.name}</span></p>
                <p><span className="text-gray-600">Gender:</span> <span className="font-semibold text-gray-900">{formData.gender}</span></p>
                <p><span className="text-gray-600">Role:</span> <span className="font-semibold text-gray-900">{formData.role}</span></p>
                <p><span className="text-gray-600">All documents:</span> <span className="font-semibold text-green-600">Ready</span></p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between gap-4 mt-8">
          <button onClick={() => step > 1 && setStep(step - 1)} className={`px-6 py-2 rounded-lg border transition ${step === 1 ? 'border-gray-300 text-gray-500' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>Previous</button>
          <div className="space-x-3">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">Save Draft</button>
            <button onClick={() => step < 4 ? setStep(step + 1) : setCurrentScreen('delegation-dashboard')} className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition">
              {step === 4 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const VerificationQueue = () => {
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const queueParticipants = participants.filter(p => ['Pending', 'Submitted', 'Correction Requested'].includes(p.status));
    const stats = {
      pending: participants.filter(p => p.status === 'Pending').length,
      avgTime: '2.5 hours',
      approved: participants.filter(p => p.status === 'Approved').length
    };

    if (selectedParticipant) {
      return (
        <div className="p-8 max-w-6xl mx-auto">
          <button onClick={() => setSelectedParticipant(null)} className="mb-6 flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium">
            <ArrowRight size={18} style={{transform: 'scaleX(-1)'}} /> Back to Queue
          </button>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Participant Data</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-900">{selectedParticipant.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">WYC ID</p>
                  <p className="font-semibold text-gray-900">{selectedParticipant.wycId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Role</p>
                  <p className="font-semibold text-gray-900">{selectedParticipant.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sub-role</p>
                  <p className="font-semibold text-gray-900">{selectedParticipant.subRole}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Delegation</p>
                  <p className="font-semibold text-gray-900">{selectedParticipant.delegation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="font-semibold text-gray-900">{selectedParticipant.country}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="font-semibold text-gray-900">{selectedParticipant.submitted}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Documents</h3>
                <div className="space-y-3">
                  {Object.entries(selectedParticipant.documents).map(([doc, status]) => (
                    <div key={doc} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 capitalize">{doc.replace('_', ' ')}</span>
                      {status ? <CheckCircle size={18} className="text-green-600" /> : <XCircle size={18} className="text-red-600" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Verification Action</h3>
                <textarea placeholder="Comments or correction details..." className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-rose-600 text-sm" rows="4"></textarea>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium">Approve</button>
                  <button className="flex-1 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition font-medium">Request Correction</button>
                  <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition font-medium">Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            <p className="text-sm text-gray-600 mt-1">Pending Review</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{stats.avgTime}</p>
            <p className="text-sm text-gray-600 mt-1">Avg Review Time</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
            <p className="text-sm text-gray-600 mt-1">Approved Today</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Verification Queue</h3>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">App ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Delegation</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Country</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {queueParticipants.map((p, idx) => {
                const colors = getStatusColor(p.status);
                return (
                  <tr key={p.id} className={idx % 2 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-rose-600">{p.appId}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.delegation}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.country}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.submitted}</td>
                    <td className="px-6 py-4 text-sm"><span style={{ ...colors, padding: '0.25rem 0.75rem' }} className="rounded-full text-xs font-medium">{p.status}</span></td>
                    <td className="px-6 py-4 text-center"><button onClick={() => setSelectedParticipant(p)} className="text-rose-600 hover:text-rose-700"><Eye size={18} /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const ParticipantRepository = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filtered = participants.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.wycId.includes(searchTerm));

    return (
      <div className="p-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900">Participant Repository</h3>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Download size={18} /> Export
            </button>
          </div>

          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-3 text-gray-400" />
              <input type="text" placeholder="Search by WYC ID or name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600" />
            </div>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">WYC ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Sub-role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Delegation</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Country</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, idx) => {
                const colors = getStatusColor(p.status);
                return (
                  <tr key={p.id} className={idx % 2 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-rose-600">{p.wycId}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.subRole}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.delegation}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.country}</td>
                    <td className="px-6 py-4 text-sm"><span style={{ ...colors, padding: '0.25rem 0.75rem' }} className="rounded-full text-xs font-medium">{p.status}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const AnalyticsDashboard = () => {
    const delegationStats = [
      { name: 'India', count: 4 },
      { name: 'Brazil', count: 3 },
      { name: 'Japan', count: 3 },
      { name: 'USA', count: 2 },
      { name: 'Germany', count: 2 },
      { name: 'Thailand', count: 2 }
    ];

    return (
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Total Participants</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">17</p>
            <p className="text-xs text-gray-500 mt-1">100% completion</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Approval Rate</p>
            <p className="text-3xl font-bold text-green-600 mt-2">58.8%</p>
            <p className="text-xs text-gray-500 mt-1">10 approved</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Avg Verification Time</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">2.5h</p>
            <p className="text-xs text-gray-500 mt-1">Per application</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Sync Success Rate</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">94%</p>
            <p className="text-xs text-gray-500 mt-1">A&T + Accreditation</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Registrations by Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData.registrationsByStatus}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
                <Bar dataKey="value" fill="#BE123C" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Participants by Role</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={analyticsData.participantsByRole} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
                  <Cell fill="#BE123C" />
                  <Cell fill="#E11D48" />
                  <Cell fill="#475569" />
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Daily Submissions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.dailySubmissions}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
              <Line type="monotone" dataKey="count" stroke="#BE123C" strokeWidth={2} dot={{ fill: '#BE123C' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Delegations by Participant Count</h3>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Delegation</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Participants</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Approved</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Pending</th>
              </tr>
            </thead>
            <tbody>
              {delegationStats.map((d, idx) => {
                const delegationParticipants = participants.filter(p => p.delegation === d.name);
                const approved = delegationParticipants.filter(p => p.status === 'Approved').length;
                const pending = delegationParticipants.filter(p => ['Pending', 'Submitted'].includes(p.status)).length;
                return (
                  <tr key={idx} className={idx % 2 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{d.name}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{d.count}</td>
                    <td className="px-6 py-4 text-sm text-green-600 font-medium">{approved}</td>
                    <td className="px-6 py-4 text-sm text-yellow-600 font-medium">{pending}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <HeaderNav />
      <div className="flex flex-1 overflow-hidden">
        {user && <Sidebar />}
        <div className="flex-1 overflow-auto">
          {currentScreen === 'login' && <LoginScreen />}
          {currentScreen === 'delegation-dashboard' && <DelegationDashboard />}
          {currentScreen === 'participant-form' && <ParticipantForm />}
          {currentScreen === 'verification-queue' && <VerificationQueue />}
          {currentScreen === 'participant-repository' && <ParticipantRepository />}
          {currentScreen === 'analytics' && <AnalyticsDashboard />}
        </div>
      </div>
    </div>
  );
};

export default WYC2026CSRS;
