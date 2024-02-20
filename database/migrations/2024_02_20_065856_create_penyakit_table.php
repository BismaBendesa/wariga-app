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
        Schema::create('penyakit', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hasil_ramalan_pribadi_id');
            $table->string('nama_penyakit');
            $table->longText('deskripsi_penyakit');
            $table->longText('gejala_penyakit');
            $table->timestamps();

            $table->foreign('hasil_ramalan_pribadi_id')->references('id')->on('hasil_ramalan_pribadi');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penyakit');
    }
};
