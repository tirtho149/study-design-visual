import React from 'react';
import { FileText, Image, Video, DollarSign, TrendingUp } from 'lucide-react';

export default function StudyDesign() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            TrAC Digital Marketing Study Design
          </h1>
          <p className="text-slate-600">Marketing Subject Pool Participants</p>
        </div>

        {/* Evaluator Pool */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-center text-slate-800 mb-4">
            Participant Pool Structure
          </h2>
          <div className="text-center mb-4">
            <div className="inline-block bg-indigo-100 px-6 py-3 rounded-lg">
              <p className="text-lg font-semibold text-indigo-800">
                N = Marketing Subject Pool Participants
              </p>
              <p className="text-sm text-indigo-600 mt-1">
                Randomly divided into 3 equal groups: n + n + n = N
              </p>
            </div>
          </div>
          
          {/* Screening Questions */}
          <div className="bg-blue-50 rounded-lg p-4 mt-4 border-l-4 border-blue-500">
            <h3 className="font-semibold text-slate-800 mb-3 text-sm">Pre-Study Screening Questions:</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Have you done any investments?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Have you participated in any crowdfunding activity?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Do you plan to make equity investment?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Do you plan to fund crowdfunding activities?</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3 italic">
              Note: Most business students have done some small investment or are seriously considering equity investment
            </p>
          </div>
        </div>

        {/* Three Groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Group G1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                G1
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-center mb-4 text-blue-600">
              Group 1
            </h3>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">
                Content Assigned:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-slate-700">Original Pitches</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <Image className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-slate-700">Corresponding Images</span>
                </div>
              </div>
            </div>

            <div className="text-center py-2">
              <span className="text-2xl font-bold text-blue-600">n</span>
              <p className="text-xs text-slate-600">participants</p>
            </div>
          </div>

          {/* Group G2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                G2
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-center mb-4 text-purple-600">
              Group 2
            </h3>
            
            <div className="bg-purple-50 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">
                Content Assigned:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <Video className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-slate-700">Generated Videos</span>
                </div>
                <div className="bg-purple-100 rounded-lg p-2 mt-2">
                  <p className="text-xs text-slate-600 text-center italic">
                    No enhancement measures
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-2 mt-12">
              <span className="text-2xl font-bold text-purple-600">n</span>
              <p className="text-xs text-slate-600">participants</p>
            </div>
          </div>

          {/* Group G3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                G3
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-center mb-4 text-green-600">
              Group 3
            </h3>
            
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">
                Content Assigned:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <FileText className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-slate-700">Pitches</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <Image className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-slate-700">Images</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <Video className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-slate-700">Videos</span>
                </div>
              </div>
            </div>

            <div className="text-center py-2">
              <span className="text-2xl font-bold text-green-600">n</span>
              <p className="text-xs text-slate-600">participants</p>
            </div>
          </div>
        </div>

        {/* Evaluation Structure */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-indigo-600" />
            <h3 className="text-xl font-bold text-slate-800">Evaluation Structure</h3>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-indigo-600 mb-2">
                How many Kiva profiles will each participant evaluate?
              </p>
              <div className="inline-block bg-indigo-100 px-8 py-4 rounded-lg mt-4">
                <p className="text-4xl font-bold text-indigo-700">k</p>
                <p className="text-sm text-slate-600 mt-2">profiles per participant</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center border-2 border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-2">Group G1</p>
                <p className="text-3xl font-bold text-blue-600">k</p>
                <p className="text-xs text-slate-600 mt-1">profiles × n participants</p>
                <p className="text-sm font-bold text-blue-700 mt-2">= k×n data points</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 text-center border-2 border-purple-200">
                <p className="text-sm font-semibold text-purple-800 mb-2">Group G2</p>
                <p className="text-3xl font-bold text-purple-600">k</p>
                <p className="text-xs text-slate-600 mt-1">profiles × n participants</p>
                <p className="text-sm font-bold text-purple-700 mt-2">= k×n data points</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 text-center border-2 border-green-200">
                <p className="text-sm font-semibold text-green-800 mb-2">Group G3</p>
                <p className="text-3xl font-bold text-green-600">k</p>
                <p className="text-xs text-slate-600 mt-1">profiles × n participants</p>
                <p className="text-sm font-bold text-green-700 mt-2">= k×n data points</p>
              </div>
            </div>

            <div className="bg-indigo-100 rounded-lg p-4 mt-6 text-center">
              <p className="text-lg font-bold text-indigo-800">
                Total Data Points Collected: 3k×n
              </p>
            </div>
          </div>
        </div>

        {/* Evaluation Metric */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-l-4 border-amber-500 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-amber-600" />
            <h3 className="text-xl font-bold text-slate-800">Evaluation Metric</h3>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-slate-700 mb-2">
              <span className="font-semibold">Task:</span> Evaluators review content and assign scores reflecting investibility of each Kiva profile
            </p>
            <p className="text-slate-700">
              <span className="font-semibold">Proposed Metric:</span> Investment amount within specified range (e.g., $0-$100) for each profile
            </p>
          </div>
        </div>

        {/* Research Question */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-teal-600" />
            <h3 className="text-xl font-bold text-slate-800">Research Question</h3>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-slate-700 font-medium">
              Do investors prefer text+image style pitches, video style pitches, or both when making investment decisions?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
