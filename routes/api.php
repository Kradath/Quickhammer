<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FactionController;
use App\Http\Controllers\SpecialRuleController;
use App\Http\Controllers\RWeaponController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::post('special-rules/store', [SpecialRuleController::class, 'store'])->name('special-rules.store');
// Route::get('special-rules', [SpecialRuleController::class, 'show']);
// Route::get('weapons', [RWeaponController::class, 'show']);


