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
        Schema::create('tanggal_lahir', function (Blueprint $table) {
            $table->id();
            $table->string('eka_wara');
            $table->string('dwi_wara');
            $table->string('tri_wara');
            $table->string('catur_wara');
            $table->string('panca_wara');
            $table->string('sad_wara');
            $table->string('sapta_wara');
            $table->string('asta_wara');
            $table->string('sanga_wara');
            $table->string('dasa_wara');
            $table->string('kategori_wayang');
            $table->string('wuku');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tanggal_lahir');
    }
};
