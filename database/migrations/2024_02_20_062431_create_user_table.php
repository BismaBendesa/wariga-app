<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user', function (Blueprint $table) {
            $table->bigIncrements('user_id');
            $table->string('username');
            $table->string('email');
            $table->string('password');
            $table->date('tanggal_lahir');
            $table->string('jenis_kelamin');
            $table->unsignedBigInteger('kode_tanggal_bali');
            $table->timestamps();

            $table->foreign('kode_tanggal_bali')->references('id')->on('tanggal_lahir');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
