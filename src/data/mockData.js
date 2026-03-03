// Mock data for the security platform

// Mock scan data
export const mockScans = [
  {
    id: '1',
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'completed',
    progress: 100,
    vulnerabilities: {
      critical: 5,
      high: 12,
      medium: 8,
      low: 3
    },
    lastScan: new Date('2024-03-01T10:30:00Z'),
    target: 'app.example.com'
  },
  {
    id: '2',
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'completed',
    progress: 100,
    vulnerabilities: {
      critical: 3,
      high: 8,
      medium: 15,
      low: 7
    },
    lastScan: new Date('2024-03-01T08:15:00Z'),
    target: 'api.example.com'
  },
  {
    id: '3',
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'completed',
    progress: 100,
    vulnerabilities: {
      critical: 2,
      high: 6,
      medium: 12,
      low: 9
    },
    lastScan: new Date('2024-02-29T16:45:00Z'),
    target: 'portal.example.com'
  },
  {
    id: '4',
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'scheduled',
    progress: 0,
    vulnerabilities: {
      critical: 1,
      high: 4,
      medium: 6,
      low: 2
    },
    lastScan: new Date('2024-02-28T14:20:00Z'),
    target: 'admin.example.com'
  },
  {
    id: '5',
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'failed',
    progress: 45,
    vulnerabilities: {
      critical: 8,
      high: 15,
      medium: 22,
      low: 11
    },
    lastScan: new Date('2024-02-27T11:10:00Z'),
    target: '192.168.1.0/24'
  },
  {
    id: '6',
    name: 'Temp Data',
    type: 'Blackbox',
    status: 'failed',
    progress: 12,
    vulnerabilities: {
      critical: 4,
      high: 9,
      medium: 18,
      low: 6
    },
    lastScan: new Date('2024-02-26T09:30:00Z'),
    target: 'temp.example.com'
  }
];

// Mock vulnerability findings
export const mockVulnerabilities = [
  {
    id: 'vuln-1',
    severity: 'critical',
    title: 'SQL Injection in Authentication Endpoint',
    endpoint: '/api/auth/login',
    description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database read access.',
    timestamp: new Date('2024-03-01T10:45:23Z'),
    scanId: '1'
  },
  {
    id: 'vuln-2',
    severity: 'high',
    title: 'Unauthorized Access to User Metadata',
    endpoint: '/api/users/profile',
    description: 'Authenticated user was able to access metadata of other users. Access control allows privilege escalation.',
    timestamp: new Date('2024-03-01T10:43:15Z'),
    scanId: '1'
  },
  {
    id: 'vuln-3',
    severity: 'medium',
    title: 'Broken Authentication Rate Limiting',
    endpoint: '/api/auth/reset',
    description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    timestamp: new Date('2024-03-01T10:41:08Z'),
    scanId: '1'
  }
];

// Mock console logs
export const mockLogs = [
  {
    id: 'log-1',
    timestamp: '09:01:08',
    message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance.",
    type: 'info',
    highlights: [
      { text: 'helpdesk.democorp.com', type: 'url' }
    ]
  },
  {
    id: 'log-2',
    timestamp: '09:01:08',
    message: 'Good! Target is online. Now let me perform port scanning to identify running services.',
    type: 'info'
  },
  {
    id: 'log-3',
    timestamp: '09:02:08',
    message: 'Excellent reconnaissance results:',
    type: 'info'
  },
  {
    id: 'log-4',
    timestamp: '09:02:08',
    message: '- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server) Let me probe the web server on target first to understand its structure.',
    type: 'info',
    highlights: [
      { text: 'helpdesk.democorp.com', type: 'url' },
      { text: 'Apache httpd 2.4.65', type: 'header' }
    ]
  },
  {
    id: 'log-5',
    timestamp: '09:04:08',
    message: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete test account: test-test". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.',
    type: 'info',
    highlights: [
      { text: 'test-test', type: 'keyword' },
      { text: '/password/test', type: 'url' }
    ]
  },
  {
    id: 'log-6',
    timestamp: '09:04:08',
    message: 'The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to "/" which means the current page. Let me try a different approach.',
    type: 'warning',
    highlights: [
      { text: '/password/test', type: 'url' },
      { text: 'POST', type: 'header' }
    ]
  },
  {
    id: 'log-7',
    timestamp: '09:05:08',
    message: 'It redirects back to /password/test. Let me check if there\'s an /api endpoint or look for other paths. Let me check what the password directly on other endpoints.',
    type: 'info',
    highlights: [
      { text: '/password/test', type: 'url' },
      { text: '/api', type: 'url' }
    ]
  },
  {
    id: 'log-8',
    timestamp: '09:06:08',
    message: 'Great! I can access the dashboard using the "X-User-Id: 10892" header. The dashboard shows "Welcome, John Doe". This suggests an insecure vulnerability - I can access any user\'s dashboard by just changing the X-User-Id header. Let me explore more of the application.',
    type: 'success',
    highlights: [
      { text: 'X-User-Id: 10892', type: 'header' },
      { text: 'insecure vulnerability', type: 'keyword' }
    ]
  }
];

// Mock statistics data
export const mockStats = {
  critical: {
    count: 86,
    change: -12,
    changeType: 'decrease'
  },
  high: {
    count: 16,
    change: -8,
    changeType: 'decrease'
  },
  medium: {
    count: 26,
    change: 15,
    changeType: 'increase'
  },
  low: {
    count: 16,
    change: -5,
    changeType: 'decrease'
  }
};

// Mock scan metadata
export const mockScanMetadata = {
  scanType: 'Grey Box',
  targets: 'google.com',
  startedAt: new Date('2024-11-22T09:00:00Z'),
  credentials: '2 Active',
  files: 'Control.pdf',
  checklists: '60/350'
};

// Mock scan progress
export const mockScanProgress = {
  percentage: 0,
  currentStep: 'spidering',
  steps: [
    { name: 'Spidering', status: 'active' },
    { name: 'Mapping', status: 'pending' },
    { name: 'Testing', status: 'pending' },
    { name: 'Validating', status: 'pending' },
    { name: 'Reporting', status: 'pending' }
  ]
};