import Chatbot from "./Chatbot";
import {
  Shield,
  Activity,
  Network,
  Terminal,
  Brain,
  Crosshair,
  AlertTriangle,
  Server,
  Database,
  Wifi,
} from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="app">

      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">
            <Shield size={25} />
          </div>

          <div>
            <h1>ARIA</h1>
            <span>Cyber Deception Platform</span>
          </div>
        </div>

        <nav>
          <div className="nav-section">MONITORING</div>

          <a className="nav-item active">
            <Activity size={19} />
            Overview
          </a>

          <a className="nav-item">
            <AlertTriangle size={19} />
            Live Attacks
          </a>

          <a className="nav-item">
            <Terminal size={19} />
            Sessions
          </a>

          <div className="nav-section">INTELLIGENCE</div>

          <a className="nav-item">
            <Brain size={19} />
            AI Analysis
          </a>

          <a className="nav-item">
            <Crosshair size={19} />
            MITRE ATT&CK
          </a>

          <a className="nav-item">
            <Network size={19} />
            Network
          </a>

          <div className="nav-section">SYSTEM</div>

          <a className="nav-item">
            <Server size={19} />
            Infrastructure
          </a>

          <a className="nav-item">
            <Database size={19} />
            Database
          </a>
        </nav>

        <div className="system-status">
          <div className="status-dot"></div>

          <div>
            <strong>System Online</strong>
            <small>ARIA infrastructure active</small>
          </div>
        </div>

      </aside>

      <main className="main">

        <header className="header">

          <div>
            <h2>Security Overview</h2>
            <p>Real-time cyber deception monitoring</p>
          </div>

          <div className="header-status">
            <Wifi size={17} />
            <span>NETWORK ACTIVE</span>
          </div>

        </header>

        <section className="stats">

          <div className="stat-card">
            <div className="stat-top">
              <span>Total Attacks</span>
              <AlertTriangle />
            </div>

            <strong>127</strong>
            <small>↑ 18% from last period</small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Active Sessions</span>
              <Terminal />
            </div>

            <strong>34</strong>
            <small>8 currently active</small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>IOCs Detected</span>
              <Crosshair />
            </div>

            <strong>89</strong>
            <small>12 new today</small>
          </div>

          <div className="stat-card threat">
            <div className="stat-top">
              <span>Threat Level</span>
              <Shield />
            </div>

            <strong>HIGH</strong>
            <small>Requires attention</small>
          </div>

        </section>

        <section className="content-grid">

          <div className="panel large">

            <div className="panel-header">

              <div>
                <h3>Attack Activity</h3>
                <p>Attacks detected over the last 24 hours</p>
              </div>

              <span className="live-badge">
                <span></span>
                LIVE
              </span>

            </div>

            <div className="fake-chart">

              <div className="chart-line"></div>

              <div className="chart-labels">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>Now</span>
              </div>

            </div>

          </div>

          <div className="panel">

            <div className="panel-header">

              <div>
                <h3>MITRE Techniques</h3>
                <p>Most observed techniques</p>
              </div>

            </div>

            <div className="technique">

              <div>
                <strong>T1105</strong>
                <span>Ingress Tool Transfer</span>
              </div>

              <b>28</b>

            </div>

            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>

            <div className="technique">

              <div>
                <strong>T1059</strong>
                <span>Command & Scripting</span>
              </div>

              <b>21</b>

            </div>

            <div className="progress">
              <div style={{ width: "68%" }}></div>
            </div>

            <div className="technique">

              <div>
                <strong>T1071</strong>
                <span>Application Protocol</span>
              </div>

              <b>16</b>

            </div>

            <div className="progress">
              <div style={{ width: "51%" }}></div>
            </div>

          </div>

        </section>

        <section className="content-grid bottom">

          <div className="panel">

            <div className="panel-header">

              <div>
                <h3>Recent Attacks</h3>
                <p>Latest detected activity</p>
              </div>

            </div>

            <div className="attack">

              <div className="attack-icon">
                <AlertTriangle size={17} />
              </div>

              <div className="attack-info">
                <strong>SSH Attack</strong>
                <span>10.0.0.15 → Cowrie</span>
              </div>

              <span className="severity high">HIGH</span>

            </div>

            <div className="attack">

              <div className="attack-icon">
                <Terminal size={17} />
              </div>

              <div className="attack-info">
                <strong>Command Execution</strong>
                <span>10.0.0.21 → Honeypot</span>
              </div>

              <span className="severity medium">MEDIUM</span>

            </div>

            <div className="attack">

              <div className="attack-icon">
                <Network size={17} />
              </div>

              <div className="attack-info">
                <strong>Port Scan</strong>
                <span>10.0.0.17 → Network</span>
              </div>

              <span className="severity low">LOW</span>

            </div>

          </div>

          <Chatbot />

        </section>

        <section className="panel infrastructure">

          <div className="panel-header">

            <div>
              <h3>ARIA Infrastructure</h3>
              <p>Component health</p>
            </div>

          </div>

          <div className="infra-grid">

            <div className="infra-item">

              <div className="infra-icon">
                <Network />
              </div>

              <div>
                <strong>Ryu Controller</strong>
                <span>● Operational</span>
              </div>

              <b>ONLINE</b>

            </div>

            <div className="infra-item">

              <div className="infra-icon">
                <Server />
              </div>

              <div>
                <strong>Open vSwitch</strong>
                <span>● Operational</span>
              </div>

              <b>ONLINE</b>

            </div>

            <div className="infra-item">

              <div className="infra-icon">
                <Shield />
              </div>

              <div>
                <strong>Cowrie Honeypot</strong>
                <span>● Capturing</span>
              </div>

              <b>ONLINE</b>

            </div>

            <div className="infra-item">

              <div className="infra-icon">
                <Brain />
              </div>

              <div>
                <strong>Qwen AI</strong>
                <span>● Local LLM</span>
              </div>

              <b>ONLINE</b>

            </div>

          </div>

        </section>

        <footer>
          ARIA Cyber Deception Platform · SDN + AI + Honeypot
        </footer>

      </main>

    </div>
  );
}

export default App;
