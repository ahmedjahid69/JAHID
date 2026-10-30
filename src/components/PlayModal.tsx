import { useState } from 'react';
import { X, Sparkles, Terminal, Play, CheckCircle2, RotateCcw } from 'lucide-react';

interface PlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function PlayModal({ isOpen, onClose, darkMode }: PlayModalProps) {
  const [selectedAgent, setSelectedAgent] = useState<'claude' | 'codex' | 'cursor'>('claude');
  const [taskPrompt, setTaskPrompt] = useState('Create an autonomous courier webhook dispatcher with exponential backoff');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const runSimulation = () => {
    setIsRunning(true);
    setLogs([]);
    setIsCompleted(false);

    const steps = [
      `[${selectedAgent.toUpperCase()}] Parsing architectural spec: "${taskPrompt}"`,
      `[${selectedAgent.toUpperCase()}] Modeling domain types: Strict TypeScript interfaces defined`,
      `[${selectedAgent.toUpperCase()}] Synthesizing idempotency token handler & Redis queue`,
      `[${selectedAgent.toUpperCase()}] Generating retry middleware with jittered exponential backoff`,
      `[VERIFIER] Running test suite: 12 tests passed, 0 failures, 100% type coverage`,
      `[PRODUCTION] Ready to deploy: Clean zero-defect output generated!`,
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
          setIsCompleted(true);
        }
      }, (idx + 1) * 450);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div
        className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
          darkMode
            ? 'bg-[#0c0c10] border-white/10 text-zinc-100 shadow-black'
            : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/8 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-semibold text-lg text-zinc-100">
                AI Teammate Simulator
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Experience how I plan, code, and test with agentic workflows
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Agent Selector */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Select Agent Teammate
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                onClick={() => setSelectedAgent('claude')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  selectedAgent === 'claude'
                    ? 'border-[#D97757] bg-[#D97757]/15 text-[#D97757] font-semibold'
                    : 'border-white/8 bg-white/3 text-zinc-400 hover:text-white'
                }`}
              >
                <div className="text-sm">Claude Code</div>
                <div className="text-[11px] opacity-75 font-mono">Architecture & Spec</div>
              </button>

              <button
                onClick={() => setSelectedAgent('codex')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  selectedAgent === 'codex'
                    ? 'border-white bg-white/15 text-white font-semibold'
                    : 'border-white/8 bg-white/3 text-zinc-400 hover:text-white'
                }`}
              >
                <div className="text-sm">Codex</div>
                <div className="text-[11px] opacity-75 font-mono">Backend Logic</div>
              </button>

              <button
                onClick={() => setSelectedAgent('cursor')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  selectedAgent === 'cursor'
                    ? 'border-[#a78bfa] bg-[#a78bfa]/15 text-[#a78bfa] font-semibold'
                    : 'border-white/8 bg-white/3 text-zinc-400 hover:text-white'
                }`}
              >
                <div className="text-sm">Cursor</div>
                <div className="text-[11px] opacity-75 font-mono">Full-Stack Synthesis</div>
              </button>
            </div>
          </div>

          {/* Prompt Task */}
          <div>
            <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Engineering Directive
            </label>
            <div className="relative">
              <input
                type="text"
                value={taskPrompt}
                onChange={(e) => setTaskPrompt(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-sm font-mono text-zinc-200 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Action Trigger */}
          <div className="flex gap-2">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isRunning ? 'Synthesizing with Agent...' : 'Run Agent Pair-Programming'}</span>
            </button>
            {logs.length > 0 && (
              <button
                onClick={() => setLogs([])}
                className="px-4 py-3 rounded-xl border border-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Reset log"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Terminal Output */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-zinc-300 min-h-[160px] max-h-[220px] overflow-y-auto space-y-2">
            <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Live Agent Terminal
              </span>
              <span>bash · zsh</span>
            </div>

            {logs.length === 0 ? (
              <div className="text-zinc-600 italic pt-6 text-center">
                Click "Run Agent Pair-Programming" to simulate the agentic sprint...
              </div>
            ) : (
              logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2 animate-in fade-in duration-200">
                  <span className="text-emerald-400 font-bold">›</span>
                  <span className={log.includes('PRODUCTION') ? 'text-emerald-400 font-semibold' : ''}>
                    {log}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
