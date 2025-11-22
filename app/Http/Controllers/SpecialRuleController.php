<?php

namespace App\Http\Controllers;

use App\Models\SpecialRule;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class SpecialRuleController extends Controller
{
    // public function index()
    // {
    //     return SpecialRule::all();
    // }
    


    // public function show()
    // {
    //     // $specialRules = SpecialRule::with('faction')->get()->map(function($rule) {
    //     //     return [
    //     //         'id' => $rule->id,
    //     //         'name' => $rule->name,
    //     //         'rule' => $rule->rule,
    //     //         'faction_name' => $rule->faction->name ?? 'None',
    //     //     ];
    //     // });
    //     // return response()->json($specialRules);
    //     $specialRules = SpecialRule::orderBy('name', 'asc')->get();
    //     return response()->json($specialRules);
    // }

    // public function store(Request $request)
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|unique:special_rules,name',
    //         'rule' => 'required|unique:special_rules,rule',
            
    //     ]);

    //     DB::table('special_rules')->insert([
    //         'name' => $request->name,
    //         'rule'  => $request->rule,
    //         'weapon' => $request->weapon,
    //     ]);
    //     return response()->json(['message' => 'Special rule created successfully']);
        
    // }

    // public function update(Request $request, SpecialRule $special_rule)
    // {
    //     $special_rule->update($request->all());
    //     return $special_rule;
    // }

    // public function destroy(SpecialRule $special_rule)
    // {
    //     $special_rule->delete();
    //     return response()->noContent();
    // }
}